<script setup>
import RotateTextBtn from './RotateTextBtn.vue';
import RadialSlider from './RadialSlider.vue';
import ScrollDetect from './ScrollDetect.vue';
import { onMounted, ref } from 'vue';

let start = ref(0);
function initial(){
    let dom = document.getElementById('works');
    start.value = dom.parentElement.clientHeight + dom.parentElement.offsetTop - dom.clientHeight - 1;
    console.log('portfolio: ' + start.value, dom.clientHeight );
}
onMounted(()=>{
    initial();
    window.addEventListener('resize', initial);
    window.addEventListener('load', initial);
})
</script>
<template>
    <div class="portfolio">
        <div id="works">
            <ScrollDetect :startPoint='start'>
                <RadialSlider :imageList="['https://picsum.photos/id/69/1400/800',
                                'https://picsum.photos/id/666/1400/800',
                                'https://picsum.photos/id/678/1400/800',
                                'https://picsum.photos/id/123/1400/800']" :contentAmount="4">
                    <template #title1>Travel Taiwan</template>
                    <template #slide1>
                        <article>
                            <div class="workImg"></div>
                            <h2 class="text-large">Travel Taiwan</h2>
                            <p class="text-small">使用公共運輸整合資訊流通服務平台(Public Transport data eXchange
                                ,PTX)的資料，從串接到處理資料的過程寫成小套件提高程式碼複用性，且可以在不同專案使用。
                                能使用搜尋的方式尋找到想要的資訊。</p>
                            <RotateTextBtn url="#123" BtnText="go to Travel Taiwan..." class="toBottom">
                            </RotateTextBtn>
                        </article>
                    </template>
                    <template #title2>CSS Rush</template>
                    <template #slide2>
                        <article>
                            <div class="workImg"></div>
                            <h2 class="text-large">CSS Rush</h2>
                            <p class="text-small">pet-landing - 切版到完成耗時14小時，使用CSS偽類、Input tag、label tag
                                製作簡易輪播功能，並包含RWD。</p>
                            <RotateTextBtn url="#456" BtnText="go to CSS Rush..." class="toBottom">
                            </RotateTextBtn>
                        </article>
                    </template>
                    <template #title3>Lee's profile</template>
                    <template #slide3>
                        <article>
                            <div class="workImg"></div>
                            <h2 class="text-large">Lee's profile</h2>
                            <p class="text-small">使用GSAP、THREEJS創建豐富特效的個人網站，自行設計網站的布局和動畫，
                                把個人特質和對世界的想法融入網站樣貌。</p>
                            <RotateTextBtn url="#789" BtnText="go to Lee's profile..." class="toBottom">
                            </RotateTextBtn>
                        </article>
                    </template>
                    <template #title4>Github Repos</template>
                    <template #slide4>
                        <article>
                            <div class="workImg"></div>
                            <h2 class="text-large">Github Repos</h2>
                            <p class="text-small">參考GitHub RESTful API 官方函式庫(Octokit)的使用方式，在自行編寫的套件上擴充方法，
                                讓取得資料的過程簡化。可以快速地看到GitHub的使用者清單，
                                以及使用者的Public Repos，並透過Router快速搜尋到特定資訊。</p>
                            <RotateTextBtn url="#010" BtnText="go to Github Repos..." class="toBottom">
                            </RotateTextBtn>
                        </article>
                    </template>
                </RadialSlider>
            </ScrollDetect>
        </div>
    </div>
</template>
<style lang="scss" scoped>

.portfolio{
    position: relative;
}
#works{
    position: relative;
    bottom: 0;
    width: 100%;
    z-index: 1;
    > *{
        background-color: $main-color-secondary;
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
                        "img" 3fr
                        "context" 1fr / auto;
        gap: 12px;
        height: 80vh;
    }
    h2{
        text-align: start;
        grid-area: head / head / head / head;
    }
    p{
        text-align: start;
        z-index: 2;
        grid-area: context / context / context / context;
    }
    .workImg{
        position: absolute;
        top: 5vh;
        left: 5vw;
        width: 100%;
        height: 600px;
        grid-area: img;
        background-color: $main-color;
    }
    .toBottom{
        grid-area: img;
        position: absolute;
    }
}
.initial{
    animation: delayToHidden 0.3s linear forwards;
}
.pass{
    opacity: 1;
}
@keyframes delayToHidden {
    from{
        opacity: 1;
    }
    99%{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
}
</style>