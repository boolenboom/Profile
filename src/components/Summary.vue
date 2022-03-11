<script setup>
import TextFlashMarquee from './TextFlashMarquee.vue';
import ScrollDetect from './ScrollDetect.vue';


</script>
<template>
    <div class="transitionAnimation">
        <TextFlashMarquee flashText="About me "></TextFlashMarquee>
    </div>
    <ScrollDetect customId="summaryDetect">
        <section id="summary" class="fullScreen">
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
            </div>
        </section>
    </ScrollDetect>
</template>
<style lang="scss">
#summary {
    .container {
        text-align: start;
        color: $text-color;
        h1 {
            font-size: 5rem;
        }
        p {
            font-size: 2rem;
            margin: 1.5rem 0;
        }
    }
}
.initial{
    > *{
        opacity: 0;
        transform: translate( 0, 100% );
    }
}
.enter,.leave{
    > *{
        animation-name: flash;
        animation-duration: 1.5s;
        animation-timing-function: ease-in;
    }
}
.enter{
    > *{
        transform: translate( 0, 0% );
        animation-iteration-count: 1;
        animation-direction: normal;
    }
}
.leave{
    > *{
        transform: translate( 0, -80% );
        animation-name: flash-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
}
@keyframes flash {
    20%{
        opacity: 1;
    }
    30%{
        opacity: .2;
    }
    45%{
        opacity: .9;
    }
    70%{
        opacity: 0;
    }
    90%{
        opacity: 1;
    }
    95%{
        opacity: .5;
    }
    to{
        opacity: 1;
    }
}
@keyframes flash-out {
    15%{
        opacity: .2;
    }
    20%{
        opacity: .9;
    }
    40%{
        opacity: 0;
    }
    75%{
        opacity: .8;
    }
    to{
        opacity: 0;
    }
}
</style>