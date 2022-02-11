<script setup>
import { onMounted, ref, toRefs } from 'vue';

const props = defineProps({
    customId: {
        type: String,
    }
});
const { customId } = toRefs(props);

let isEnter = ref('initial');
function scrollHandler( DetectDom ) {
    const enterPoint = DetectDom.offsetTop - 100;
    const leavePoint = DetectDom.offsetTop + 200;
    return ()=>{
        console.log(enterPoint, leavePoint);
        window.requestAnimationFrame(() => {
            if( window.scrollY > enterPoint && window.scrollY < leavePoint ){
                isEnter.value = 'enter';
            }
            else if(window.scrollY > leavePoint){
                isEnter.value = 'leave';
            }
            else{
                isEnter.value = 'initial';
            }
        })
    };
}

onMounted(() => {
    let dom = {};
    if( document.querySelector(`#${customId.value}`).parentElement == document.querySelector('#app') ){
        dom = document.querySelector(`#${customId.value}`);
    }
    else{
        dom = document.querySelector(`#${customId.value}`).parentElement;
    }
    console.log(dom);

    window.addEventListener( 'scroll', scrollHandler( dom ) );
});

</script>
<template>
    <div class="scrollDetect" :id="customId" :class="isEnter">
        <slot></slot>
    </div>
</template>
<style lang="scss">
.scrollDetect{
    > *{
        transition: all 1s ease-in;
    }
}
</style>