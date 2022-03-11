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
let idleDelay = 0;

    function eyeTrack(event){
        window.requestAnimationFrame(()=>{
            const hozPercentage = event.x / window.visualViewport.width;
            const verPercentage = event.y / window.visualViewport.height;
            rotX.value = gsap.utils.interpolate(-10, 10, verPercentage);
            rotY.value = gsap.utils.interpolate(10, -10, hozPercentage);
            rotZ.value = 0;
            
            const coordinateMapping = {
                x:Math.abs((verPercentage - 0.5) * 2),
                y:Math.abs((hozPercentage - 0.5) * 2)
            }
            const hozInvolve = hozPercentage * (coordinateMapping.x * -0.3 + 1) + 0.15 * coordinateMapping.x,
                verInvolve = verPercentage * (coordinateMapping.y * -0.3 + 1) + 0.15 * coordinateMapping.y;
            posX.value = gsap.utils.interpolate([-24, -16, 0, 16, 24], hozInvolve);
            posY.value = gsap.utils.interpolate([-24, -16, 0, 16, 24], verInvolve);

            clearTimeout( idleDelay );
            idleDelay = setTimeout( eyeInit, 3000);
        })
    }
    function eyeInit(){
        window.requestAnimationFrame(()=>{
            [rotX.value, rotY.value, rotZ.value, posX.value, posY.value] = Array(5).fill(0);
        })
    }
onMounted(()=>{
    window.addEventListener('pointerdown', eyeTrack);
    window.addEventListener('pointermove', eyeTrack);
})
onUnmounted(()=>{
    window.removeEventListener('pointerdown', eyeTrack);
    window.removeEventListener('pointermove', eyeTrack);
})
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
    <div class="fixedBackground pos-fixed fullScreen">
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
}
.sphere {
    position: relative;
    width: 90vmin;
    height: 90vmin;
    border-radius: 50%;
    background-color: #fff;
    transform: translate3d( 0, 0, 20px ) rotateX(calc( -1 * var(--rotX))) rotateY(calc( -1 * var(--rotY)));
    transition: transform .4s ease-out;
    transform-style: preserve-3d;
    perspective: 100px;
    .eye{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(calc( -50% + var(--posX, 0px) ), calc( -50% + var(--posY, 0px) ), 20px) 
            rotate(-180deg) rotateX(var(--rotX)) rotateY(var(--rotY)) rotateZ(var(--rotZ));
        width: 20%;
        height: 20%;
        clip-path: url(#triangle);
        background-color: $main-color-secondary;
        transition: transform .4s ease-out, border-bottom .35s, border-top .35s;
        border-bottom: 0px solid #fff;
        border-top: 0px solid #fff;
        &.wink{
            border-bottom: 9vmin solid #fff;
            border-top: 9vmin solid #fff;
        }
    }
}
.stage {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    perspective: 2000px;
}
</style>