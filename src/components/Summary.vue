<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';

let progress = ref(0);

function changeProgress(entries) {
    progress.value = entries[0].intersectionRatio;
}

let fuseProgress = computed(()=>{
    return -1 * Math.pow(Math.abs(progress.value - 1),2) + 1;
})

onMounted(()=>{
    let ob = new IntersectionObserver(changeProgress, {
        rootMargin: '99999px 0px -100% 0px',
        threshold: function () {
            let freq = 100;
            let arr = Array(freq).fill(0);
            for (let index = 0; index < arr.length; index++) {
                arr[index] = (index + 1) * (1 / freq);
            }
            return arr;
        }(),
    });
    let watchDom = document.querySelector('#summary');
    ob.observe(watchDom);
})

let offsetLeft = ref(0);
function setOffsetLeft(){
    let verticalSection = document.querySelector('#summary div.pos-sticky');
    offsetLeft.value = verticalSection.scrollWidth - verticalSection.clientWidth;
}
onMounted(()=>{
    setOffsetLeft();
})
window.addEventListener('resize',setOffsetLeft)
</script>
<template>
    <section id="summary" class="fullScreen"
        :style="{'--progress':fuseProgress - 0.02,'--offset-left': offsetLeft * progress * -1 + 'px'}">
        <div class="pos-sticky">
            <span class="fuseBG">
                <svg width="6877" height="548" viewBox="0 0 6877 548" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <!-- <linearGradient id="fuseGradient">
                            <stop offset="0%" stop-color="#dd3333" stop-opacity="1"></stop>
                            <stop :offset="`${fuseProgress * 99.99}%`" stop-color="#dd3333" stop-opacity="1">
                            </stop>
                            <stop :offset="`${fuseProgress * 99.99 + 0.01}%`" stop-color="#ffffff" stop-opacity="0">
                            </stop>
                            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"></stop>
                        </linearGradient> -->
                        <radialGradient id="starLight">
                            <stop offset="0%" stop-color="#ffffff"></stop>
                            <stop offset="80%" stop-color="#ffffff" stop-opacity="1"></stop>
                            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"></stop>
                        </radialGradient>
                    </defs>
                    <!-- <path id="fuseLine"
                        d="M-4 316.846C273.024 335.84 433.205 328.98 617.417 321.596C847.681 312.366 1208.86 58.4619 1173.27 179.223C1137.68 299.983 1007.42 184.627 1173.27 124.416C1315.39 72.8223 1556.21 46.3412 1718.06 49.2109C2110.38 56.1667 1998.06 183.447 2210.01 261.23C2530.39 378.808 3437.48 357.662 3367.35 124.416C3335.12 17.2111 3193.48 181.892 3298.07 223.76C3402.66 265.628 3695.82 742.25 3871 339.237C3900.57 271.231 4044.86 55.6775 4072.35 168.722C4180 611.261 4253.69 481.894 4379.12 223.76C4478.28 19.6791 5259.05 78.4295 5334 261.23"
                        stroke="url(#fuseGradient)" stroke-width="8" /> -->
                    <path
                        d="M-4 277.309C163.642 219.942 546.961 126.06 779.106 209.467C1069.29 313.725 1098.54 481.335 1360.64 518.25C1622.74 555.164 1974.93 406.509 2035.19 296.265C2095.45 186.021 2233.52 78.7704 2373.35 66.7982C2513.17 54.826 3053.75 54.826 3754.05 325.697C4454.34 596.568 4760.32 207.471 5629.69 226.926C6499.06 246.381 6469.81 413.493 6362.75 402.019C6255.69 390.546 6403.12 290.279 6511.35 290.279C6597.93 290.279 6791.19 310.898 6877 321.207"
                        stroke="#dd3333" stroke-width="12" />
                    <!-- <circle class="connect light" :class="{ 'light-off': progress < 0.001 || progress > 0.9}" r="50"
                        fill="url(#starLight)"></circle> -->
                    <circle class="main light" :class="{ 'light-off': progress < 0.001 || progress > 0.9}" r="50"
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
                        <img class="icon scale-up" src="../assets/head-sticker/Profile_icon.png" alt="personal icon">
                    </p>
                    <p id="p2" class="dis-flex">
                    <div class="icon" :class="{'scale-up': progress > 0.2}">
                        <img src="../assets/summary/1108-ferris-wheel-lineal.gif" alt="personal icon">
                        <div class="img-switch">
                            <img class="grow-width" src="../assets/summary/control_panel_lightOn.png" alt="">
                            <img src="../assets/summary/control_panel_lightOn.png" alt="">
                            <img class="switch" src="../assets/summary/control_panel.png" alt="">
                        </div>
                    </div>
                    <span>
                        透過Vue框架幫家人的工作坊做出有RWD的主視覺介紹網頁；
                        串接交通部的公共運輸整合資訊流通服務平臺(PTX)做出旅遊網站，以及弄一些簡單的小嘗試增進技術的應用。
                    </span>
                    </p>
                    <p id="p3" class="dis-flex">
                    <div class="icon img-fadeInOut" :class="{'scale-up': progress > 0.5}">
                        <img src="../assets/summary/treasure_plant_map.png" alt="">
                        <img class="switch" src="../assets/summary/treasure_plant_map_light.png" alt="">
                    </div>
                    <span>
                        在快速變化的前端領域裡，需要的是敏捷思維以及持續學習的精神，這對我來說就是會源源不絕噴出寶物的地方，等著我去挖掘。
                        也希望能夠更深入軟體領域，認識更多新事物，並且創造價值。
                    </span>
                    </p>
                    <p id="p4"></p>
                </div>
            </article>
        </div>
    </section>
</template>
<style lang="scss">
#summary {
    height: 400vh;
    padding: 0px;
    --left-padding:10vw;
    color: $text-color;
    .fuseBG{
        position: absolute;
        top: 0;
        height: 100%;
        z-index: -1;
        overflow: visible;
        transform: translateX(var(--offset-left, 0));
        transition: transform .1s ease-out;
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
                flex: 3 1 60vw;
                @include phone-width{
                    flex-basis: auto;
                }
            }
            .icon{
                position: relative;
                flex: 1 2 auto;
                transition: transform .4s ease;
                transform: scale(0);
                &.scale-up{
                    transition-timing-function: cubic-bezier(0.13, 2.57, 1, 0.06);
                    transform: scale(1);
                }
            }
            img{
                width: unset;
            }
        }
        #p1{
            padding-inline-start: var(--left-padding);
            img{
                margin-inline-start: auto;
                width: 100%;
            }
            @include phone-width{
                span {
                    margin-inline-end: 20vw;
                }
                img{
                    width: unset;
                }
            }
        }
        #p2{
            .img-switch{
                position: absolute;
                bottom: 0;
                right: 0;
                img.switch{
                    animation: zIndexSwitch 4s linear infinite;
                }
                img.grow-width{
                    position: relative;
                    width: 30vmin;
                }
                img{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
                @keyframes zIndexSwitch {
                    0%{
                        z-index: 1;
                    }
                    25%{
                        z-index: -1;
                    }
                    40%{
                        z-index: -1;
                    }
                }
            }
        }
        #p3{
            .img-fadeInOut{
                position: relative;
                width: 100%;
                img{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    animation: floatUpDown 8s ease-in-out infinite;
                }
                img.switch{
                    animation: fadeSwitch 7s ease-in-out infinite, floatUpDown 8s ease-in-out infinite;
                }
                @keyframes fadeSwitch {
                    0%{
                        opacity: 0;
                    }
                    5%{
                        opacity: 0;
                    }
                    15%{
                        opacity: 1;
                    }
                    80%{
                        opacity: 1;
                    }
                    90%{
                        opacity: 0;
                    }
                    100%{
                        opacity: 0;
                    }
                }
                @keyframes floatUpDown {
                    50%{
                        transform: translateY(-40px);
                    }
                }
            }
            @include phone-width {
                flex-direction: column-reverse;
                span{
                    transform: translateY(-10vh);
                }
            }
        }
        #p4{
            padding-inline-end: var(--left-padding);
        }
    }
    .summary-content{
        display: grid;
        grid-template-columns: repeat(4,80vw);
        gap: 50vw;
        overflow: visible;
        transform: translateX(var(--offset-left, 0));
        transition: transform .1s ease-out;
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