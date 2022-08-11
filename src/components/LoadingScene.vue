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

setTimeout( CheckLoadStatus, 4000 );
</script>
<template>
<div class="pos-fixed fullScreen zIndex-L1 loading" :class="{'loaded':isLoadedToHidden}">
    <!-- <StarrySky></StarrySky> -->
    <div class="dis-flex">
        <span class="text-large" data-text="Loading...">
            Loading...
        </span>
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
        span{
            position: relative;
            padding: 36px;
            &::after{
                content: attr(data-text);
                overflow: hidden;
                position: absolute;
                padding: inherit;
                padding-right: 0;
                top: 0;
                left: 0;
                border-right: 8px solid;
                white-space: nowrap;
                max-width: 0px;
                color: #fff;
                text-shadow: 0 0 20px #fff, 0 0 12px #fff;
                animation: printing 4s ease-in-out infinite;
            }
            @keyframes printing {
                30%{
                    max-width: 80%;
                }
                53%{
                    max-width: 20%;
                }
                74%{
                    max-width: 63%;
                }
            }
        }
    }
    &.loaded{
        opacity: 0;
        z-index: -99;
        pointer-events: none;
    }
}
</style>