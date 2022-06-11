<script setup>
import { onMounted, ref, toRefs } from 'vue';

const props = defineProps({
    startPoint:{
        type: Number,
        default:0
    },
    endPoint:{
        type: Number
    }
});
const { startPoint, endPoint } = toRefs(props);

let state = ref('initial');
let scopeProgress = ref(0);
function scrollHandler() {
    return ()=>{
        window.requestAnimationFrame(() => {
            let enterPoint = startPoint.value;
            let leavePoint = endPoint.value;
            if( leavePoint == undefined ){
                state.value = window.scrollY > enterPoint ? 'pass' : 'initial';
            }
            else if( leavePoint != undefined ){
                if( window.scrollY > enterPoint && window.scrollY < leavePoint ){
                    scopeProgress.value = (window.scrollY - enterPoint) / (leavePoint - enterPoint);
                    state.value = 'enter';
                }
                else if( window.scrollY > leavePoint ){
                    scopeProgress.value = 1;
                    state.value = 'pass';
                }
                else{
                    scopeProgress.value = 0;
                    state.value = 'initial';
                }
            }
        })
    };
}

onMounted(() => {
    window.addEventListener( 'scroll', scrollHandler() );
});

</script>
<template>
    <div class="scrollDetect" :class="state" :style="`--scope-progress:${scopeProgress};`">
        <slot></slot>
    </div>
</template>
<style lang="scss">
.scrollDetect{
    > *{
        transition: all .2s ease-out;
    }
}
</style>