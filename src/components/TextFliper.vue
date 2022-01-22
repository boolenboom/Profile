<script setup>
import { onMounted, reactive, ref, toRefs, watch } from 'vue';
const props = defineProps({
    textList: {
        type: Array,
        vaildator( inputList = [] ){
            return inputList.filter( el=>{
                return typeof el === 'string';
            } )
        },
        default(){
            return [];
        }
    }
});

let { textList } = toRefs( props );
let stateList = reactive([]);

watch( textList, listFresh);
onMounted( listFresh );

function listFresh(){
    stateList.length = textList.value.length;
    stateList.fill( 'running', 0 );
}

let duration = ref(2);

function animationCoolDown(ev){
    const currId = ev.target.dataset.id;
    const length = textList.value.length;
    const coolTime = 1000 * (duration.value * (length - 1) + duration.value / 0.8 * 0.1 * (length - 2));
    stateList[currId] = 'paused';
    setTimeout( function(){
        stateList[currId] = 'running';
    }, coolTime );
}
</script>
<template>
    <div class="fliper">
        <h1 v-for=" (text, index) of textList" 
            class="text"
            :data-id=" index "
            :style="`--duration: ${ (duration / 0.8) }s;
                    --delay: ${ index * ((duration / 0.8) * (1 - 0.1)) }s;
                    --playState: ${ stateList[index] }`"
            @animationiteration="animationCoolDown"> 
            {{text}}
        </h1>
        <h1 class="hidden">textHeight</h1>
    </div>
</template>
<style lang="scss">
.fliper{
    position: relative;
    overflow-y: hidden;
    .text{
        position: absolute;
        top: 0;
        width: fit-content;
        animation: flipUp 
            var( --duration, 0s )  
            var( --delay, 0s ) 
            infinite 
            var( --playState, 'paused') ;
        transform: translateY( 100% );
    }
    .hidden{
        opacity: 0;
    }
    @keyframes flipUp {
        0%{
            transform: translateY( 100% );
        }
        10%{
            transform: translateY( 0% );
        }
        90%{
            transform: translateY( 0% );
        }
        100%{
            transform: translateY( -100% );
        }
    }
}
</style>