<script setup>
import RotateTextBtn from './RotateTextBtn.vue';
import RadialSlider from './RadialSlider.vue';
import ScrollDetect from './ScrollDetect.vue';
import { onMounted, ref } from 'vue';



let start = ref(0);
function initial(){
    let dom = document.getElementById('portfolio');
    start.value = dom.parentElement.clientHeight + dom.parentElement.offsetTop - dom.clientHeight - 1;
}
onMounted(()=>{
    initial();
    window.addEventListener('resize', initial);
    window.addEventListener('load', initial);
})
</script>
<template>
    <div id="portfolio">
        <ScrollDetect :startPoint='start'>
            <RadialSlider :imageList="['src/assets/portfolio/travel-taiwan_3DMockUp.png',
            'src/assets/portfolio/pet-landing_3DMockUp.png',
            'src/assets/portfolio/github-repos_3DMockUp.png',
            'src/assets/portfolio/github-repos_3DMockUp.png']" :contentAmount="4">
                <template #title1>Travel Taiwan</template>
                <template #slide1>
                    <article>
                        <div class="workImg">
                            <!-- <img src="../assets/portfolio/travel-taiwan.png" alt=""> -->
                        </div>
                        <h2 class="text-large">Travel Taiwan</h2>
                        <p class="text-small">使用公共運輸整合資訊流通服務平台(Public Transport data eXchange
                            ,PTX)的資料，從串接到處理資料的過程寫成小套件提高程式碼複用性，且可以在不同專案使用。
                            能使用搜尋的方式尋找到想要的資訊。</p>
                        <a href="#123" class="jump-url">
                            <RotateTextBtn>go to Travel Taiwan...</RotateTextBtn>
                        </a>
                    </article>
                </template>
                <template #title2>CSS Rush</template>
                <template #slide2>
                    <article>
                        <div class="workImg">
                            <!-- <img src="../assets/portfolio/pet-landing.png" alt=""> -->
                        </div>
                        <h2 class="text-large">CSS Rush</h2>
                        <p class="text-small">pet-landing - 切版到完成耗時14小時，使用CSS偽類、Input tag、label tag
                            製作簡易輪播功能，並包含RWD。</p>
                        <a href="#456" class="jump-url">
                            <RotateTextBtn>go to CSS Rush...</RotateTextBtn>
                        </a>
                    </article>
                </template>
                <template #title3>Lee's profile</template>
                <template #slide3>
                    <article>
                        <div class="workImg">
                            <!-- <img src="../assets/portfolio/github-repos.png" alt=""> -->
                        </div>
                        <h2 class="text-large">Lee's profile</h2>
                        <p class="text-small">使用GSAP、THREEJS創建豐富特效的個人網站，自行設計網站的布局和動畫，
                            把個人特質和對世界的想法融入網站樣貌。</p>
                        <a href="#789" class="jump-url">
                            <RotateTextBtn>go to Lee's profile...</RotateTextBtn>
                        </a>
                    </article>
                </template>
                <template #title4>Github Repos</template>
                <template #slide4>
                    <article>
                        <div class="workImg">
                            <!-- <img src="../assets/portfolio/github-repos.png" alt=""> -->
                        </div>
                        <h2 class="text-large">Github Repos</h2>
                        <p class="text-small">參考GitHub RESTful API 官方函式庫(Octokit)的使用方式，在自行編寫的套件上擴充方法，
                            讓取得資料的過程簡化。可以快速地看到GitHub的使用者清單，
                            以及使用者的Public Repos，並透過Router快速搜尋到特定資訊。</p>
                        <a href="#012" class="jump-url">
                            <RotateTextBtn>go to Github Repos...</RotateTextBtn>
                        </a>
                    </article>
                </template>
            </RadialSlider>
        </ScrollDetect>
    </div>
</template>
<style lang="scss" scoped>
#portfolio{
    position: relative;
    bottom: 0;
    width: 100%;
    z-index: 1;
    > *{
        background-color: $main-color-secondary;
        transition: opacity 0s linear;
    }
}
article{
    position: relative;
    display: grid;
    grid-template:  "head head" auto
                    "img context" 1fr
                    "img context" 84px / 30vw 1fr;
    gap: 36px;
    height: 60vh;
    @include phone-width{
        grid-template: "head" auto
                        "img" 5fr
                        "context" 4fr / auto;
        gap: 24px;
        height: 95vh;
    }
    h2{
        color: $main-color-secondary;
        text-shadow: rgba($color: #fff, $alpha: .8) 2px 3px 0;
        text-align: start;
        grid-area: head / head / head / head;
    }
    p{
        font-weight: 700;
        // text-shadow: 
        //     -1px -1px 0 $main-color-secondary,
        //     1px -1px 0 $main-color-secondary,
        //     -1px 1px 0 $main-color-secondary,
        //     1px 1px 0 $main-color-secondary;
        text-align: start;
        background-color: #ffffffdd;
        color: $main-color-secondary;
        padding: 12px;
        border-radius: 12px;
        height: fit-content;
        z-index: 2;
        grid-area: context / context / context / context;
        @include phone-width{
            margin-inline-end: 30%;
        }
    }
    .workImg{
        position: absolute;
        top: 5vh;
        left: 5vw;
        width: 100%;
        height: 600px;
        grid-area: img;
    }
    .jump-url{
        grid-area: img;
        position: absolute;
        top: 12px;
        &::after{
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 36px;
            height: 36px;
            background-color: #000;
            clip-path: polygon(0 84%, 16% 100%, 80% 35%, 80% 78%, 100% 60%, 100% 0, 40% 0, 21% 20%, 65% 20%);
        }
    }
}
.initial{
    opacity: 0;
    transition-delay: .15s !important;
}
.pass{
    opacity: 1;
}
</style>