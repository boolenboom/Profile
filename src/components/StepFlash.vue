<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue';
gsap.registerPlugin(ScrollTrigger);


const props = defineProps({
    aniText:{
        type:String,
        default:'Steps Text'
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

function interpolate(from=0, to=0, basis=0){
    let isFloat = from % 1 !== 0 || to % 1 !== 0;
    let modRatio = 1;
    if(isFloat){
        const fromSlicePoint = String(from).indexOf('.') > 0 ? String(from).indexOf('.') : 0;
        let fromDecimalPlace = String(from).slice(fromSlicePoint).length ;
        const toSlicePoint = String(to).indexOf('.') > 0 ? String(to).indexOf('.') : 0;
        let toDecimalPlace = String(to).slice(toSlicePoint).length;
        modRatio = Math.pow(10,Math.max(fromDecimalPlace, toDecimalPlace));
    }
    return ((to * modRatio - from * modRatio) * basis + from * modRatio) / modRatio; 
}
if (process.env.NODE_ENV === 'development'){
    let testData = [[0,70,.5,35],[40,70,.8,64],[0,-10,.2,-2],[-10,10,.6,2],[.1,.4,.7,.31],[8000,-0.5,.2,6399.9],[.005,1,.4,.403],[.001,100,.42,42.00058],[-0.151,62,.8,49.5698],[80000,500,.6,32300]]
    try{
        for (let index = 0; index < testData.length; index++) {
            let testValue = interpolate(testData[index][0], testData[index][1], testData[index][2]);
            if(testValue !== testData[index][3])
                throw new EvalError(`interpolate(${testData[index][0]}, ${testData[index][1]}, ${testData[index][2]}) == ${testValue} , except: ${testData[index][3]}`);
        }
    }
    catch(error){
        console.warn(error)
    }
}
console.log(gsap.utils)
    let topList = reactive(Array(textAmount.value).fill(0));
    topList = topList.map((val, index) => {
        return interpolate(0, 70, 1 - Math.pow(+((index / textAmount.value) - 1), 4))
    })
let offsetList = reactive(Array(textAmount.value).fill(0));
offsetList = topList.map((val, index, arr)=>{
    return index ? 30 - (val - arr[index - 1]) + 1 : 0;
})

onMounted(()=>{
    // let watchDom = document.querySelector('')
    let timeline = gsap.timeline();
    timeline.to( '.stepFlash-text', {
        startAt: {
            opacity: 0,
        },
        duration: 0.1
    })
    .to( '.stepFlash-text',{
        opacity:1,
        ease: 'steps(1)',
        stagger:0.2,
        duration: 1.5
    })
    .to('.stepFlash-text', {
        clipPath: 'none',
        stagger: 0.2,
        duration: 1,
    })
    .to( '.stepFlash-text',{
        opacity: 0,
        ease: 'steps(1)',
        stagger: 0.2,
        duration: 1,
    }, '-=4.1');

    ScrollTrigger.create({
        animation: timeline,
        trigger: '.stepFlash-animation-stage',
        start: 'top top',
        endTrigger: '#portfolio',
        end: 'top top',
        scrub: 1,
        pin: true,
    })
})

let textScaleX = ref(1);
function calcTextScale(){
    let dom_stepFlashText = document.querySelector('.stepFlash-text');
    textScaleX.value = window.innerWidth / dom_stepFlashText.clientWidth;
}
onMounted(()=>{
    calcTextScale();
    window.addEventListener('resize',calcTextScale);
})
onUnmounted(()=>{
    window.removeEventListener('resize',calcTextScale)
})
</script>
<template>
    <div class="stepFlash-animation-stage" :style="`--text-scaleX: ${textScaleX}`">
        <div class="pos-sticky">
            <h1 v-for="i of textAmount" class="stepFlash-text"
                :style="`--top-position: ${topList[i-1]}vh; --clip-polygon: polygon(0 ${offsetList[i-1]}vh, 100% ${offsetList[i-1]}vh, 100% 102%, 0 102%)`">
                {{aniText}}</h1>
        </div>
    </div>
</template>
<style lang="scss">
.stepFlash-animation-stage{
    overflow: hidden;
    position: relative;
    z-index: 2;
    pointer-events: none;
    height: 100vh;
    width: 100%;

    .stepFlash-text{
        position: absolute;
        top: var(--top-position,0);
        left: 0;
        z-index: 10;
        letter-spacing: 16px;
        font-size: 40vh;
        line-height: .75;
        word-break: break-all;
        white-space: nowrap;
        color: $main-color;
        transform: scaleX(var(--text-scaleX, 1));
        transform-origin: 0% 50%;
        clip-path: var(--clip-polygon, none);
    }
}
</style>