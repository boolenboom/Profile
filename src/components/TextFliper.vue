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
let longestString = ref('');

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
    let sortList = Array.from(textList.value);
    longestString.value = sortList.sort(( a, b )=>b.length - a.length)[0];
}

let duration = ref(2);

function animationActiveChange(ev){
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
            @animationend="animationActiveChange"> 
            {{text}}
        </h1>
        <h1 class="hidden">{{longestString}}</h1>
    </div>
</template>
<style lang="scss">
.fliper{
    position: relative;
    overflow: hidden;
    h1{
        margin: 0;
    }
    .text{
        position: absolute;
        top: 0;
        width: fit-content;
        transform: translateY( 100% );
        @include phone-width{
            transform: translateX(100%);
        }
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
        @include phone-width{
            animation-name: flipLeft;
        }
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
    @keyframes flipLeft {
        0% {
            transform: translateX(100%);
        }
        
        10% {
            transform: translateX(0%);
        }
        
        90% {
            transform: translateX(0%);
        }
        
        100% {
            transform: translateX(-100%);
        }
    }
}
</style>