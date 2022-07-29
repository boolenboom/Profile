<script setup>
import RotateTextBtn from './RotateTextBtn.vue';
import RadialSlider from './RadialSlider.vue';
import ScrollDetect from './ScrollDetect.vue';
import { onMounted, ref } from 'vue';
import img_travel_taiwan from '../assets/portfolio/travel-taiwan_3DMockUp.png';
import img_pet_landing from '../assets/portfolio/pet-landing_3DMockUp.png';
import img_profile from '../assets/portfolio/profile_3DMockUp.png';
import img_github_repos from '../assets/portfolio/github-repos_3DMockUp.png';

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
let imageList = ref([
    img_travel_taiwan,
    img_pet_landing,
    img_profile,
    img_github_repos
    ])
</script>
<template>
    <div id="portfolio">
        <ScrollDetect :startPoint='start'>
            <RadialSlider :imageList="imageList" :contentAmount="4">
                <template #title1>Travel Taiwan</template>
                <template #slide1>
                    <article>
                        <div class="workImg">
                            <!-- <img src="../assets/portfolio/travel-taiwan.png" alt=""> -->
                        </div>
                        <h2 class="text-large">Travel Taiwan</h2>
                        <p class="text-small">
                            ．Vue2、Vue Router、AJAX、SCSS．<br />
                            使用公共運輸整合資訊流通服務平台(Public Transport data eXchange
                            , PTX)的資料，從串接到處理資料的過程寫成小套件提高程式碼複用性，以及確保欄位無資料時的處理。<br />
                            使用第三屆的前端修練精神時光屋(THE F2E)設計稿(<a
                                href="https://www.figma.com/file/IBlZc32IdQ46jUVtfOHxZn/w1%E5%8F%B0%E7%81%A3%E6%97%85%E9%81%8A%E6%99%AF%E9%BB%9E%E5%B0%8E%E8%A6%BD?node-id=67%3A220"
                                target="_blank" rel="noopener noreferrer">figma連結</a>)並依照設計稿完成樣式和變版。
                        </p>
                        <!-- case 6656 click event trigger -->
                        <a href="https://travel-taiwan.netlify.app/" target="_blank" rel="noopener noreferrer"
                            class="jump-url">
                            <RotateTextBtn>go to travel taiwan···</RotateTextBtn>
                        </a>
                    </article>
                </template>
                <template #title2>Pet-landing</template>
                <template #slide2>
                    <article>
                        <div class="workImg">
                            <!-- <img src="../assets/portfolio/pet-landing.png" alt=""> -->
                        </div>
                        <h2 class="text-large">Pet-landing</h2>
                        <p class="text-small">
                            ．HTML、CSS． <br />
                            完全參照monster template的網頁Pet-landing重製作，切版到完成耗時14小時，使用CSS偽類、Input tag、label
                            tag製作簡易輪播功能，並包含RWD。</p>
                        <a href="https://boolenboom.github.io/CSS-Rush/pet-landing/" target="_blank"
                            rel="noopener noreferrer" class="jump-url">
                            <RotateTextBtn>go to pet-landing···</RotateTextBtn>
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
                        <p class="text-small">
                            ．Vue3、Vite、GSAP、SCSS．<br />
                            使用GSAP創建豐富特效的個人網站，自行設計網站的布局和動畫，
                            把個人特質和對世界的想法融入網站樣貌。
                        </p>
                        <a href="https://boolenboom.github.io/Profile/" target="_blank" rel="noopener noreferrer"
                            class="jump-url">
                            <RotateTextBtn>go to lee's profile···</RotateTextBtn>
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
                        <p class="text-small">
                            ．React、React Router、Vite、AJAX．<br />
                            參考GitHub RESTful API 官方函式庫(Octokit)的使用方式，在自行編寫的套件上擴充方法，
                            讓取得資料的過程簡化。可以快速地看到GitHub的使用者清單、Repos，並透過Router快速搜尋到特定資訊。</p>
                        <a href="https://react-repos-list.netlify.app/" target="_blank" rel="noopener noreferrer"
                            class="jump-url">
                            <RotateTextBtn>go to github repos···</RotateTextBtn>
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
        text-shadow: 
        rgba($color: #fff, $alpha: .8) 2px 2px 0,
        rgba($color: #fff, $alpha: .8) -2px 2px 0,
        rgba($color: #fff, $alpha: .8) 2px -2px 0,
        rgba($color: #fff, $alpha: .8) -2px -2px 0;
        text-align: start;
        grid-area: head / head / head / head;
    }
    p{
        font-weight: 700;
        text-align: start;
        background-color: #ffffffaa;
        color: $main-color-secondary;
        a{
            color: $main-color-secondary;
            text-decoration:underline;
        }
        backdrop-filter: blur(2px);
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
        padding: 24px;
        background-color: rgba($color: #fff, $alpha: .73);
        border-radius: 50%;
        backdrop-filter: blur(2px);
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
            background-color: $main-color;
            clip-path: polygon(0 84%, 16% 100%, 80% 35%, 80% 78%, 100% 60%, 100% 0, 40% 0, 21% 20%, 65% 20%);
        }
        &:hover > *{
            animation-play-state: running;
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