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

watch( textList, ()=>{
    listFresh();
});
onMounted( ()=>{
    listFresh();
} );

function listFresh(){
    stateList.length = textList.value.length;
    stateList[0] = 'running';
    stateList.fill( 'paused', 1 );
}

let duration = ref(2);

function animationCoolDown(ev){
    const currId = ev.target.dataset.id;
    const length = textList.value.length;
    const nextId = (+currId + 1) % length
    stateList[currId] = 'paused';
    stateList[nextId] = 'running';
}
function isRun(id){
    return (stateList[id] == 'running')
}
</script>
<template>
    <div class="fliper">
        <h1 v-for=" (text, index) of textList" 
            class="text"
            :data-id=" index "
            :class="{ 'active' : isRun(index) }"
            :style="`--duration: ${ (duration / 0.8) }s;`"
            @animationend="animationCoolDown"> 
            {{text}}
        </h1>
        <h1 class="hidden">textHeight</h1>
    </div>
</template>
<style lang="scss">
.fliper{
    position: relative;
    overflow-y: hidden;
    h1{
        margin: 0;
    }
    .text{
        position: absolute;
        top: 0;
        width: fit-content;
        transform: translateY( 100% );
    }
    .hidden{
        opacity: 0;
        pointer-events: none;
    }
    .active{
        animation: flipUp 
            var( --duration, 0s )  
            var( --delay, 0s ) 
            1;
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