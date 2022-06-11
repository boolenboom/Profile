<script setup>
import { onMounted, reactive, ref } from 'vue';
import scrollDetect from '../assets/public-js/scrollDetect.js';

let scroll = reactive(new scrollDetect(0));

let start = ref(0),end = ref(0);
function initial(){
    let dom = document.querySelector('.transitionAnimation.hero2summary');
    start.value = dom.offsetTop + dom.clientHeight / 2;
    end.value = start.value + dom.clientHeight;
    console.log('summary: ' + start.value, end.value);

    scroll.setRange(start.value, end.value);
}

onMounted(()=>{
    initial();
    window.addEventListener('resize', initial);
})
</script>
<template>
    
    <section id="summary" class="fullScreen" :style="{'--progress':scroll.progress}">
        <div class="container">
            <h1>About me</h1>
            <p>
                喜歡透過各種方式來尋找能達成目標且一石二鳥的解決辦法，文章、實作經驗、談話中找出有價值的資訊，幫助我用更多角度去挖掘問題本質。
                在大學裡累積了很多數位內容的實作經驗，培養了對開發的興趣，透過Vue框架幫家人的工作坊做出有RWD的主視覺介紹網頁；
                串接交通部的公共運輸整合資訊流通服務平臺(PTX)做出旅遊網站，以及弄一些簡單的小嘗試增進技術的應用。
            </p>
            <p>
                在快速變化的前端領域裡，需要的是敏捷思維以及持續學習的精神，這對我來說就是會源源不絕噴出寶物的地方，等著我去挖掘。
                也希望能夠更深入軟體領域，認識更多新事物，並且創造價值。
            </p>
            <span>{{scroll}}</span>
        </div>
    </section>
</template>
<style lang="scss" scoped>
#summary {
    .container {
        transform: translate( 0, calc( 30vh - 60vh * var(--progress)));
        transition: transform .2s ease-out;
        text-align: start;
        color: $text-color;
        p {
            margin: 0.5rem 0;
        }
    }
}
</style>