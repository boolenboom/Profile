<script setup>
import gsap from 'gsap';
import { computed, onMounted, onUnmounted, ref } from 'vue';

let rotX = ref(0), rotY = ref(0), rotZ = ref(0);
let posX = ref(0), posY = ref(0);
let width = 0, height = 0;
function setScreenWidthHeight(){
    width = window.visualViewport.width;
    height = window.visualViewport.height;
    console.log(width, height);
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
            let hozPercentage = event.x / width
            let verPercentage = event.y / height;
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
            rotX.value = 0;
            rotY.value = 0;
            rotZ.value = 0;
            posX.value = 0;
            posY.value = 0;
        })
    }

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

let computedTransform = computed(()=>{
    return `--rotX:${rotX.value}deg;
            --rotY:${rotY.value}deg;
            --rotZ:${rotZ.value}deg;
            --posX:${posX.value}vmin;
            --posY:${posY.value}vmin;`
})
</script>
<template>
    <svg class="dis-hidden">
        <clipPath id="circle" clipPathUnits="objectBoundingBox">
            <path
                d="M.95,.5
                A.5.5,0,0,1,.92 .67
                .5.5,0,0,1,.82.82
                .5.5,0,0,1,.67,.92,
                .5.5,0,0,1,.5,.95,
                .5.5,0,0,1,.33,.92,
                .5.5,0,0,1,.18.82
                .5.5,0,0,1,.08,.67
                .5.5,0,0,1,.05,.5
                .5.5,0,0,1,.08,.33
                .5.5,0,0,1,.18.18
                .5.5,0,0,1,.33,.08,
                .5.5,0,0,1,.5,.05,
                .5.5,0,0,1,.67,.08,
                .5.5,0,0,1,.82.18
                .5.5,0,0,1,.92,.33
                .5.5,0,0,1,.95,.5Z"
            />
        </clipPath>
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