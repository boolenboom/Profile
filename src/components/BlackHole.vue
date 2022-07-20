<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, toRefs } from 'vue';
gsap.registerPlugin(ScrollTrigger);


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
    let transformList = Array(textAmount.value);
    transformList.fill(0);
    transformList = transformList.map(( val, index )=>{
        return gsap.utils.interpolate(0, 70, 1 - Math.pow(+((index / textAmount.value) - 1), 4))
    })
    let timeline = gsap.timeline();
    let dom_blackHoleText = document.querySelector('.blackHole-text');
    timeline.to( '.blackHole-text', {
        startAt: {
            opacity: 0,
            scaleX: window.innerWidth / dom_blackHoleText.clientWidth,
            x: '-50%',
            left: '50vw',
            y: function ( index ) {
                return transformList[index] + 'vh';
            },
            clipPath: function( index ){
                let offset = index ? 30 - (transformList[index] - transformList[index - 1]) + 1 : 0;
                return `polygon(0 ${offset}vh, 100% ${offset}vh, 100% 102%, 0 102%)`;
            },
        },
        duration: 0.1
    })
    .to( '.blackHole-text',{
        opacity:1,
        ease: 'steps(1)',
        stagger:0.2,
        duration: 1.5
    })
    .to('.blackHole-text', {
        clipPath: 'none',
        stagger: 0.2,
        duration: 1,
    })
    .to( '.blackHole-text',{
        opacity: 0,
        ease: 'steps(1)',
        stagger: 0.2,
        duration: 1,
    }, '-=4.1');

    ScrollTrigger.create({
        animation: timeline,
        trigger: '.transitionAnimation.summary2portfolio .pin',
        start: 'top top',
        endTrigger: '#portfolio',
        end: 'top top',
        scrub: 1,
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
    z-index: 2;
    pointer-events: none;
    height: 100vh;
    width: 100%;

    transform-style: preserve-3d;
    perspective: 20px;
    perspective-origin: center center;
    .blackHole-text{
        position: absolute;
        top: 0;
        z-index: 10;
        letter-spacing: 16px;
        font-size: 40vh;
        line-height: .75;
        word-break: break-all;
        white-space: nowrap;
        color: $main-color;
    }
    clip-path: none;
}
</style>