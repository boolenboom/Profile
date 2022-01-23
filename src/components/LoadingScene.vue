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
.bg-halfBlue{
    background-color: rgba($color: #21326a, $alpha: .8);
    *{
        color: #ababcd;
    }
}
</style>