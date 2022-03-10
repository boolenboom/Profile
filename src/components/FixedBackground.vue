<script setup>
import gsap from 'gsap';
import { computed, onMounted, onUnmounted, ref } from 'vue';

// * 物體 transform 資料
let rotX = ref(0), rotY = ref(0), rotZ = ref(0);
let posX = ref(0), posY = ref(0);
let computedTransform = computed(()=>{
    return `--rotX:${rotX.value}deg;
            --rotY:${rotY.value}deg;
            --rotZ:${rotZ.value}deg;
            --posX:${posX.value}vmin;
            --posY:${posY.value}vmin;`
})
// *

// * 使用者互動行為
let viewWidth = 0, viewHeight = 0;
function setScreenWidthHeight(){
    viewWidth = window.visualViewport.width;
    viewHeight = window.visualViewport.height;
}
onMounted(()=>{
    setScreenWidthHeight();
    window.addEventListener('resize',setScreenWidthHeight);
})
onUnmounted(()=>{
    window.removeEventListener('resize',setScreenWidthHeight);
})

    function eyeTrack(event){
        window.requestAnimationFrame(()=>{
            const hozPercentage = event.x / viewWidth
            const verPercentage = event.y / viewHeight;
            rotX.value = gsap.utils.interpolate(-15, 15, verPercentage);
            rotY.value = gsap.utils.interpolate(15, -15, hozPercentage);
            rotZ.value = 0;
            const hozInvolve = Math.abs((verPercentage - 0.5) * 2),
                verInvolve = Math.abs((hozPercentage - 0.5) * 2);
            posX.value = gsap.utils.interpolate([-18, -12, 0, 12, 18], hozPercentage * (hozInvolve * -0.3 + 1) + 0.15 * hozInvolve);
            posY.value = gsap.utils.interpolate([-18, -12, 0, 12, 18], verPercentage * (verInvolve * -0.3 + 1) + 0.15 * verInvolve);
        })
    }
    function eyeInit(){
        window.requestAnimationFrame(()=>{
            [rotX.value, rotY.value, rotZ.value, posX.value, posY.value] = Array(5).fill(0);
        })
    }
// *

// * 眨眼
let winkTiming = ref(true);
    function wink(){
        winkTiming.value = true;
    }
    function winkTimer(){
        if(!winkTiming.value)return;
        winkTiming.value = false;
        setTimeout(wink, Math.random() * 4000 + 500);
    }
onMounted(()=>{
    winkTimer();
})
// *

</script>
<template>
    <svg class="dis-hidden">
        <clipPath id="triangle" clipPathUnits="objectBoundingBox">
            <path 
            d='M.33.1
            A2.39,2.39,0,0,0,.02,.66
            .23.23,0,0,0,.19,.98,
            2.22,2.22,0,0,0,.82,.98,
            .23.23,0,0,0,.98,.67,
            2.07,2.07,0,0,0,.67.09
            .2.2,0,0,0,.33.1Z'/>
        </clipPath>
    </svg>
    <div class="fixedBackground pos-fixed fullScreen" @pointerdown="eyeTrack" @pointermove="eyeTrack" @pointerleave="eyeInit">
        <div class="stage dis-flex">
            <div class="sphere" :style="computedTransform">
                <div class="eye" :class="{'wink':winkTiming}" @transitionend="winkTimer"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.fixedBackground {
    z-index: 0;
    background-color: $main-color;
    transform-style: preserve-3d;
    perspective: 200px;
}
.sphere {
    position: relative;
    width: 90vmin;
    height: 90vmin;
    border-radius: 50%;
    background-color: #fff;
    transform: translate3d( 0, 0, 50px ) rotateX(var(--rotX)) rotateY(var(--rotY));
    transition: transform .4s ease-out;
    transform-style: preserve-3d;
    perspective: 200px;
    .eye{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(calc( -50% + var(--posX, 0px) ), calc( -50% + var(--posY, 0px) ), 100px) 
            rotate(-180deg) rotateX(var(--rotX)) rotateY(var(--rotY)) rotateZ(var(--rotZ));
        width: 10%;
        height: 10%;
        clip-path: url(#triangle);
        background-color: $main-color-secondary;
        transition: transform .4s ease-out, border-bottom .2s, border-top .2s;
        border-bottom: 0px solid #fff;
        border-top: 0px solid #fff;
        &.wink{
            border-bottom: 50px solid #fff;
            border-top: 50px solid #fff;
        }
    }
}
.stage {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
}
</style>