<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { onMounted, toRefs } from 'vue';

const props = defineProps({
    aniText:{
        type:String,
        default:'Black Hole'
    },
    textAmount:{
        type:Number,
        default: 15,
        vaildator(value){
            return value % 1 === 0 && value > 12;
        }
    }
})
let { aniText,textAmount } = toRefs( props );

onMounted(()=>{
    let timeline = gsap.timeline();
    timeline.to( '.blackHole-animation-stage .blackHole-text', {
        startAt: {
            opacity: 0,
            y: function ( index ) {
                return gsap.utils.interpolate(0, 180, 1 - Math.pow(+((index / textAmount.value) - 1), 4)) + '%';
            },
            zIndex: function( index ) {
                return 100 - index;
            },
        },
        duration:0.1
    })
    .to( '.blackHole-animation-stage .blackHole-text',{
        opacity:1,
        ease: 'steps(1)',
        stagger:0.2,
        duration: 2
    })
    .to( '.blackHole-animation-stage .blackHole-text',{
        transformOrigin: '150% 50%',
        x: '-100%',
        y: '50%',
        z: -1800,
        rotationY: 60,
        rotation: function(index){
            return index * -(360 / textAmount.value);
        },
        duration:1,
        ease: 'expo'
    })
    .to( '.blackHole-animation-stage .blackHole-text',{
        z: -600,
        duration:1,
    });

    ScrollTrigger.create({
        animation: timeline,
        trigger: '.blackHole-animation-stage',
        start: 'top top',
        end: '+=1000',
        scrub: 2,
        pin: true,
    })
})
</script>
<template>
<div class="blackHole-animation-stage">
    <h1 v-for="i of textAmount" class="blackHole-text">{{aniText}}</h1>
</div>
</template>
<style lang="scss">
.blackHole-animation-stage{
    overflow: hidden;
    position: relative;
    height: 100vh;
    background-color: #2185c8;
    transform-style: preserve-3d;
    perspective: 50px;
    perspective-origin: 50% 50%;
    .blackHole-text{
        position: absolute;
        top: 0;
        z-index: 10;
        font-size: 50vmin;
        line-height: .75;
        background-color: #2185c8;
        word-break: break-all;
        white-space: nowrap;
    }
}
</style>