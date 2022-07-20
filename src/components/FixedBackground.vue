<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { computed, onMounted, onUnmounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

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

let isIdle = ref(true);

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
        isIdle.value = false;
    }
    function eyeInit(){
        isIdle.value = true;
        window.requestAnimationFrame(()=>{
            [rotX.value, rotY.value, rotZ.value, posX.value, posY.value] = Array(5).fill(0);
        })
    }
onMounted(()=>{
    window.addEventListener('pointerdown', eyeTrack);
    window.addEventListener('pointermove', eyeTrack);
    window.scrollTo({top:0,left:0,behavior:'smooth'});
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

onMounted(()=>{
    gsap.to('.sphere.master',{
        onStart:function(){
            window.removeEventListener('pointerdown', eyeTrack);//看有沒有效能議題
            window.removeEventListener('pointermove', eyeTrack);
            window.requestAnimationFrame(()=>{
                clearTimeout( idleDelay );
                [rotX.value, rotY.value, rotZ.value, posX.value, posY.value] = [ 10, 0, 0, 0, 24 ];
            });
            isIdle.value = true;
        },
        onReverseComplete:function(){
            window.addEventListener('pointerdown', eyeTrack);
            window.addEventListener('pointermove', eyeTrack);
            eyeInit();
        },
        y: '-100vh',
        scrollTrigger:{
            trigger: '#hero',
            start: 'top -20%',
            endTrigger: '.transitionAnimation.hero2summary',
            end: 'top top',
            scrub: true,
        },
        duration: 1
    });
    
    let summary = gsap.timeline()
    .to('.sphere.summary2works',{
        startAt:{
            x:'100vw'
        },
        keyframes:[{
            x: '-10vw',
            duration: 8,
        },{
            y: '100vh',
            duration: 3,
            delay: 5
        },{
            x: 0,
            duration: 0.1,
            delay: 0.1,
            ease: 'step(1)'
        }],
        scrollTrigger:{
            trigger:'#summary',
            start:'bottom bottom',
            endTrigger: '#summary',
            end:'bottom 10%',
            scrub:true
        }
    });

    let summary2works = gsap.timeline()
    .to('.sphere.summary2works',{
        y: 0,
        scale: 10,
        duration: 0.5,
        delay: 0.3
    })
    .to('.sphere.summary2works', {
        scale: 14,
        duration: 1
    })
    .to('.sphere.summary2works', {
        y: '-100vh',
        ease: 'expo',
        duration: 0.3
    });

    ScrollTrigger.create({
        animation:summary2works,
        trigger:'#summary',
        start:'bottom 30%',
        endTrigger: '#portfolio',
        end: 'top top',
        scrub:true
    });

    window.addEventListener('resize',()=>{
        ScrollTrigger.refresh();
    })
})
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
            <div class="sphere master" :class="{'idle':isIdle}" :style="computedTransform">
                <div class="eye" :class="{'wink':winkTiming}" @transitionend="winkTimer"></div>
            </div>
            <div class="sphere summary2works">
                <div class="headSticker">
                    <div class="tri"></div>
                </div>
                <div class="hole"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.fixedBackground {
    z-index: 0;
    background-color: $main-color;
    overflow: hidden;
}
.sphere {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include pad-width{
        transition: transform 0.4s ease;
    }
    @include phone-width{
        transition: transform 0.4s ease;
    }
    width: 90vmin;
    height: 90vmin;
    border-radius: 50%;
    background-color: #fff;
    transform-style: preserve-3d;
    perspective: 100px;
    perspective-origin: 50% 50%;
}
.master{
    transform: translate3d(-50%, -50%, 20px) rotateX(calc( -1 * var(--rotX))) rotateY(calc( -1 * var(--rotY)));
    &.idle{
        transition: transform 0.4s ease;
        .eye{
            transition: transform .4s ease, border-bottom .35s, border-top .35s;
        }
    }
    .eye{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(calc( -50% + var(--posX, 0px) ), calc( -50% + var(--posY, 0px) ), 20px) 
            rotate(-180deg) rotateX(var(--rotX)) rotateY(var(--rotY)) rotateZ(var(--rotZ));
        @include pad-width {
            transition: transform 0.4s ease,
                border-bottom .35s,
                border-top .35s;
        }
        @include phone-width{
            transition: transform 0.4s ease,
                border-bottom .35s,
                border-top .35s;
        }
        width: 20%;
        height: 20%;
        clip-path: url(#triangle);
        background-color: $main-color-secondary;
        transition: border-bottom .35s, border-top .35s;
        border-bottom: 0px solid #fff;
        border-top: 0px solid #fff;
        &.wink{
            border-bottom: 9vmin solid #fff;
            border-top: 9vmin solid #fff;
        }
    }
}
.summary2works{
    transition: transform 0.4s ease;
    width: 75vmin;
    height: 75vmin;
    @include pad-width{
        width: 50vmin;
        height: 50vmin;
    }
    > *{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate( -50%, -50% ) translate3d( 0, 0, 100px);
    }
    .headSticker{
        width: 50%;
        height: 50%;
        z-index: 2;
        overflow: hidden;
    }
    .tri{
        clip-path: url(#triangle);
        width: 30%;
        height: 30%;
        background-color: #fff;
    }
    .hole{
        transform: translateX(-50%);
        border-radius: 50%;
        width: 50%;
        height: 50%;
        z-index: 1;
        background-color: $main-color-secondary;
    }
}
.stage {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    perspective: 2000px;
    perspective-origin: center center;
}
</style>