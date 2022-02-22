<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref, toRefs, watch } from "vue";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
    col: {
        type: Number,
        default: 3
    },
    flashText: {
        type: String,
        default() {
            return 'flash text';
        }
    }
});

let { flashText } = toRefs(props);
let repeat = ref(4);
watch(flashText, (newString) => {
    repeat.value = Math.floor(28 / newString.length);
});
function randomPos(){
    return gsap.utils.random(-200, -800);
}

onMounted(()=>{
    let timeline = gsap.timeline();
    timeline.to('.text-column', { 
        xPercent: function(index){
            return index % 2 ? gsap.utils.random(-10,-20) : gsap.utils.random(10,40);
        },
        duration: 5 })
        .to('.text-column span', {
            startAt: { opacity: 0 },
            keyframes: {
                "5%": { opacity: 1 },
                "7%": { opacity: 0 },
                "10%": { opacity: 1 },
                "90%": { opacity: 1 },
                "93%": { opacity: 0 },
                "95%": { opacity: 1 },
                "100%": { opacity: 0 },
            },
            ease: "none",
            duration: 4,
            delay: 'random( 0,1 )'
        }, '-=5');

    ScrollTrigger.create({
        animation: timeline,
        trigger: '.animation-stage',
        start: 'top top',
        end: '+=800',
        scrub: 3,
        pin: true,
    });
})

</script>
<template>
    <div class="animation-stage" :style="`--col:${col};`">
        <div v-for="i of col" class="text-column" :class="`id${i}`" :style="`--start-pos:${randomPos()}px;`">
            <span v-for="i of repeat">{{ flashText }}</span>
        </div>
    </div>
</template>
<style lang="scss">
.animation-stage {
    overflow: hidden;
}
.text-column {
    white-space: nowrap;
    height: calc(100vh / var(--col));
    position: relative;
    left: var(--start-pos);
    span {
        font-size: calc(100vh / var(--col));
        line-height: 0.75;
        color: transparent;
        -webkit-text-stroke: 4px $text-color;
    }
}
</style>