<script setup>
import { ref, toRefs } from 'vue';
// import StarrySky from './StarrySky.vue';

const props = defineProps({
    isLoadComplete:{
        type:Boolean,
        default(){
            return false;
        }
    }
})

let { isLoadComplete } = toRefs(props);
let isLoadedToHidden = ref(false);

function CheckLoadStatus(){
    console.log(props);
    if(document.visibilityState == 'visible' && isLoadComplete.value){
        loaded();
    }
    else{
        setTimeout(CheckLoadStatus, 3000);
    }
}
function loaded(){
    window.scrollTo({top:0,left:0})
    isLoadedToHidden.value = true;
}

setTimeout( CheckLoadStatus, 3000 );
</script>
<template>
<div class="pos-fixed fullScreen zIndex-L1 loading" :class="{'loaded':isLoadedToHidden}">
    <!-- <StarrySky></StarrySky> -->
    <div class="dis-flex">
        <span>
            Loading...
        </span>
        <img src="../assets/loading/332-loader-3-lineal.gif"/>
    </div>
</div>
</template>
<style lang="scss">
.loading{
    background-color: $main-color;
    transition: opacity .5s ease, z-index .1s .5s linear;
    div{
        color: $text-color;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        &.dis-flex{
            align-items: center;
        }
    }
    img{
        width: 400px;
        transform: rotate(320deg);
    }
    &.loaded{
        opacity: 0;
        z-index: -99;
    }
}
</style>