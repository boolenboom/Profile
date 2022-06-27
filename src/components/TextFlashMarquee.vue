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
function randomPos(min, max){
    let randomSum = 0;
    for (let index = 0; index < 4; index++) {
        randomSum += Math.round(Math.random() * max / 4);
    }
    return min + randomSum;
}

onMounted(()=>{
    let timeline = gsap.timeline();
    timeline.to('.text-column', { 
        xPercent: function(index){
            return index % 2 ? randomPos(-80, -120) : randomPos(60, 80);
        },
        duration: 5,
        ease:'linear' })
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
            duration: 5,
            delay: 'random( 0,0.5 )'
        }, '-=5');

    ScrollTrigger.create({
        animation: timeline,
        trigger: '.transitionAnimation.hero2summary .pin',
        start: 'top top',
        end: '+=90%',
        scrub: 1,
        pin: true,
    });
})

</script>
<template>
    <div class="animation-stage" :style="`--col:${col};`">
        <div v-for="i of col" class="text-column" :class="`id${i}`"
            :style="`--start-pos:${i % 2 ? randomPos(-1800, -2400) : randomPos(-200, -600)}px;`">
            <span v-for="i of repeat">{{ flashText }}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
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
    span~span{
        margin-inline-start: 4rem;
    }
}
</style>