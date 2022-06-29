<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
import scrollDetect from '../assets/public-js/scrollDetect.js';

let scroll = reactive(new scrollDetect(0));

let start = ref(0),end = ref(0);
function calcRange(){
    let dom = document.querySelector('#summary');
    start.value = dom.offsetTop;
    end.value = start.value + dom.clientHeight - window.innerHeight;
    console.log('summary: ' + start.value, end.value);

    scroll.setRange(start.value, end.value);
}

onMounted(()=>{
    calcRange();
    window.addEventListener('resize', calcRange);
})

onMounted(()=>{
    let verticalSection = document.querySelector('.summary-content');
    watch(() => scroll.progress, (progress) => {
        let position = (verticalSection.scrollWidth - window.innerWidth + 
            (window.innerWidth - verticalSection.clientWidth)) * progress;//捲動總長 - 視窗寬度 + 區塊和視窗差
        verticalSection.scrollTo({ left: position });
    })
})
</script>
<template>

    <section id="summary" class="fullScreen" :style="{'--progress':scroll.progress}">
        <article class="pos-sticky">
            <h1 class="text-large">About me</h1>
            <article class="summary-content">
                <p class="text-medium">
                    喜歡透過各種方式來尋找能達成目標且一石二鳥的解決辦法，文章、實作經驗、談話中找出有價值的資訊，幫助我用更多角度去挖掘問題本質。
                </p>
                <p class="text-medium ">
                    在大學裡累積了很多數位內容的實作經驗，培養了對開發的興趣，透過Vue框架幫家人的工作坊做出有RWD的主視覺介紹網頁；
                    串接交通部的公共運輸整合資訊流通服務平臺(PTX)做出旅遊網站，以及弄一些簡單的小嘗試增進技術的應用。
                </p>
                <p class="text-medium">
                    在快速變化的前端領域裡，需要的是敏捷思維以及持續學習的精神，這對我來說就是會源源不絕噴出寶物的地方，等著我去挖掘。
                    也希望能夠更深入軟體領域，認識更多新事物，並且創造價值。
                </p>
            </article>
            <span>{{scroll}}</span>
        </article>
    </section>
</template>
<style lang="scss">
#summary {
    height: 250vh;
    --left-padding:1vw;
    @include pc-width{
        --left-padding: calc(50vw - 720px);
    }
    @include pad-width{
        --left-padding: calc(50vw - 270px);
    }
    .pos-sticky {
        top: 20vh;
        text-align: start;
        color: $text-color;
        h1{
            margin-left: var(--left-padding);
        }
        p {
            padding-inline-start: var(--left-padding);
            margin: 2rem 0;
        }
    }
    .summary-content{
        display: grid;
        grid-template-columns: repeat(3,minmax(50vw,70vw));
        gap: 50vw;
        overflow: hidden;
    }
}
</style>