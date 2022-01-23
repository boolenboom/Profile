<script setup>
import { ref, toRefs } from 'vue';

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
    isLoadedToHidden.value = true;
}

setTimeout( CheckLoadStatus, 5000 );
</script>
<template>
<div class="pos-fixed fullScreen zIndex-L1 bg-halfBlue" :class="{'dis-none':isLoadedToHidden}">
    <h1 class="pos-center">Loading...</h1>
</div>
</template>
<style lang="scss">
.pos-fixed{
    position: fixed;
}
.pos-center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1ch;
    width: 100%;
    height: 100%;
}
.fullScreen{
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
.zIndex-L1{
    z-index: 1000;
}
.dis-none{
    display: none;
}
.bg-halfBlue{
    background-color: rgba($color: #21326a, $alpha: .8);
    *{
        color: #ababcd;
    }
}
</style>