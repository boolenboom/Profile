<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, reactive, ref, watch } from 'vue';
import scrollDetect from '../assets/public-js/scrollDetect.js';

let scroll = reactive(new scrollDetect(0));

let start = ref(0),end = ref(0);
function calcRange(){
    let dom = document.querySelector('#summary');
    start.value = dom.offsetTop + 200;
    end.value = start.value + dom.clientHeight - window.innerHeight - 400;

    scroll.setRange(start.value, end.value);
}

let fuseProgress = computed(()=>{
    return -1 * Math.pow(Math.abs(scroll.progress - 1),1.6) + 1;
})

onMounted(()=>{
    calcRange();
    window.addEventListener('resize', calcRange);
})

onMounted(()=>{
    let verticalSection = document.querySelector('#summary div.pos-sticky');
    watch(() => scroll.progress, (progress) => {
        let position = (verticalSection.scrollWidth - window.innerWidth + 
            (window.innerWidth - verticalSection.clientWidth)) * progress;//捲動總長 - 視窗寬度 + 區塊和視窗差
        verticalSection.scrollTo({ left: position });
    })
})
</script>
<template>
    <section id="summary" class="fullScreen" :style="{'--progress':scroll.progress}">
        <div class="pos-sticky">
            <span class="fuseBG">
                <svg width="6877" height="548" viewBox="0 0 6877 548" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="fuseGradient">
                            <stop offset="0%" stop-color="#dd3333" stop-opacity="1"></stop>
                            <stop :offset="`${fuseProgress * 99.89}%`" stop-color="#dd3333" stop-opacity="1">
                            </stop>
                            <stop :offset="`${fuseProgress * 99.89 + 0.11}%`" stop-color="#ffffff" stop-opacity="0">
                            </stop>
                            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"></stop>
                        </linearGradient>
                        <radialGradient id="starLight">
                            <stop offset="0%" stop-color="#ffffff"></stop>
                            <stop offset="80%" stop-color="#ffffff" stop-opacity="1"></stop>
                            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"></stop>
                        </radialGradient>
                    </defs>
                    <path id="fuseLine"
                        d="M-4 316.846C273.024 335.84 433.205 328.98 617.417 321.596C847.681 312.366 1208.86 58.4619 1173.27 179.223C1137.68 299.983 1007.42 184.627 1173.27 124.416C1315.39 72.8223 1556.21 46.3412 1718.06 49.2109C2110.38 56.1667 1998.06 183.447 2210.01 261.23C2530.39 378.808 3437.48 357.662 3367.35 124.416C3335.12 17.2111 3193.48 181.892 3298.07 223.76C3402.66 265.628 3695.82 742.25 3871 339.237C3900.57 271.231 4044.86 55.6775 4072.35 168.722C4180 611.261 4253.69 481.894 4379.12 223.76C4478.28 19.6791 5259.05 78.4295 5334 261.23"
                        stroke="url(#fuseGradient)" stroke-width="8" />
                    <path
                        d="M-4 277.309C163.642 219.942 546.961 126.06 779.106 209.467C1069.29 313.725 1098.54 481.335 1360.64 518.25C1622.74 555.164 1974.93 406.509 2035.19 296.265C2095.45 186.021 2233.52 78.7704 2373.35 66.7982C2513.17 54.826 3053.75 54.826 3754.05 325.697C4454.34 596.568 4760.32 207.471 5629.69 226.926C6499.06 246.381 6469.81 413.493 6362.75 402.019C6255.69 390.546 6403.12 290.279 6511.35 290.279C6597.93 290.279 6791.19 310.898 6877 321.207"
                        stroke="url(#fuseGradient)" stroke-width="12" />
                    <circle class="connect light"
                        :class="{ 'light-off': scroll.status == 'initial' || scroll.status == 'pass'}" r="50"
                        fill="url(#starLight)"></circle>
                    <circle class="main light"
                        :class="{ 'light-off': scroll.status == 'initial' || scroll.status == 'pass'}" r="50"
                        fill="url(#starLight)"></circle>
                </svg>
            </span>
            <article>
                <h1 class="text-large">About me</h1>
                <div class="summary-content text-medium">
                    <p id="p1" class="dis-flex">
                        <span>
                            喜歡透過各種方式來尋找能達成目標且一石二鳥的解決辦法，文章、實作經驗、談話中找出有價值的資訊，幫助我用更多角度去挖掘問題本質。
                        </span>
                        <img :class="{'scale-up':scroll.progress > 0}" src="../assets/head-sticker/Lee_icon.png"
                            alt="personal icon">
                    </p>
                    <p id="p2" class="dis-flex">
                        <img :class="{'scale-up':scroll.progress > 0.4}" src="../assets/head-sticker/Lee_icon.png"
                            alt="personal icon">
                        <span>
                            透過Vue框架幫家人的工作坊做出有RWD的主視覺介紹網頁；
                            串接交通部的公共運輸整合資訊流通服務平臺(PTX)做出旅遊網站，以及弄一些簡單的小嘗試增進技術的應用。
                        </span>
                    </p>
                    <p id="p3" class="dis-flex">
                        <img :class="{'scale-up':scroll.progress > 0.75}" src="../assets/head-sticker/Lee_icon.png"
                            alt="personal icon">
                        <span>
                            在快速變化的前端領域裡，需要的是敏捷思維以及持續學習的精神，這對我來說就是會源源不絕噴出寶物的地方，等著我去挖掘。
                            也希望能夠更深入軟體領域，認識更多新事物，並且創造價值。
                        </span>
                    </p>
                </div>
            </article>
        </div>
    </section>
</template>
<style lang="scss">
#summary {
    height: 400vh;
    --left-padding:10vw;
    color: $text-color;
    .fuseBG{
        position: absolute;
        top: 0;
        height: 100%;
        z-index: -1;
        overflow: visible;
        svg{
            width: 340vw;
            overflow: visible;
            height: 98vh;
        }
        .light{
            --factor: calc((var(--progress) - 1) * (var(--progress) - 1), 0);
            &.connect{
                offset-path: path("M-4 316.846C273.024 335.84 433.205 328.98 617.417 321.596C847.681 312.366 1208.86 58.4619 1173.27 179.223C1137.68 299.983 1007.42 184.627 1173.27 124.416C1315.39 72.8223 1556.21 46.3412 1718.06 49.2109C2110.38 56.1667 1998.06 183.447 2210.01 261.23C2530.39 378.808 3437.48 357.662 3367.35 124.416C3335.12 17.2111 3193.48 181.892 3298.07 223.76C3402.66 265.628 3695.82 742.25 3871 339.237C3900.57 271.231 4044.86 55.6775 4072.35 168.722C4180 611.261 4253.69 481.894 4379.12 223.76C4478.28 19.6791 5259.05 78.4295 5334 261.23");
            }
            &.main{
                offset-path: path("M-4 277.309C163.642 219.942 546.961 126.06 779.106 209.467C1069.29 313.725 1098.54 481.335 1360.64 518.25C1622.74 555.164 1974.93 406.509 2035.19 296.265C2095.45 186.021 2233.52 78.7704 2373.35 66.7982C2513.17 54.826 3053.75 54.826 3754.05 325.697C4454.34 596.568 4760.32 207.471 5629.69 226.926C6499.06 246.381 6469.81 413.493 6362.75 402.019C6255.69 390.546 6403.12 290.279 6511.35 290.279C6597.93 290.279 6791.19 310.898 6877 321.207");
            }
            &.light-off{
                animation: lightOff .3s .2s ease forwards;
            }
            offset-distance: calc(var(--progress) * 100%);
            transition: offset-distance .3s ease-out;
            animation: lightFlicker 5s ease-in-out infinite;
        }
    }
    .pos-sticky {
        top: 0;
        height: 100vh;
        text-align: start;
        overflow-x: hidden;
    }
    article{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        height: 100%;
        h1{
            margin-left: var(--left-padding);
        }
        p {
            @include phone-width{
                flex-direction: column;
            }
            span{
                flex: 3 3 auto;
            }
            img{
                flex: 0 1 auto;
                width: auto;
                height: 40vh;
                @include phone-width{
                    width: 50vw;
                    height: auto;
                }
                background-color: #fff;
                border-radius: 25%;
                transition: transform .4s cubic-bezier(0.13, 2.57, 1, 0.06);
                transform: scale(0);
                &.scale-up{
                    transform: scale(1);
                }
            }
        }
        #p1{
            padding-inline-start: var(--left-padding);
            img{
                margin-inline-start: auto;
            }
            @include phone-width{
                span {
                    margin-inline-end: 20vw;
                }
            }
        }
        #p2{
            @include phone-width{
                span{
                    margin-block-start: 5vh;
                    margin-inline-start: 20vw;
                }
            }
        }
        #p3{
            padding-inline-end: var(--left-padding);
            @include phone-width {
                flex-direction: column-reverse;
                span{
                    margin-inline-start: 20vw;
                    transform: translateY(-10vh);
                }
            }
        }
    }
    .summary-content{
        display: grid;
        grid-template-columns: repeat(3,80vw);
        gap: 50vw;
        overflow: visible;
        .dis-flex{
            gap: 3vw;
        }
    }
    @keyframes lightFlicker {
        50%{
            opacity: calc(random() * 0.2 + 0.75);
            transform: scale(calc(random() * 0.1 + 0.88));
        }
    }
    @keyframes lightOff {
        to{
            transform: scale(0);
        }
    }
}
</style>