<script setup>
import { ref } from 'vue';
import TextFliper from './TextFliper.vue';

let maskGraph = ref("M224 50Q250 28 270 50S320 80 400 290Q 467 447 384 440S10 420 0 360Q0 330 14 300S60 200 224 50Z");
</script>
<template>
<section id="hero">
    <div class="container dis-flex">
        <div class="graph">
            <div class="mask" :style="`--mask-graph: '${maskGraph}';`">
                <div class="bg-blue img"></div>
            </div>
        </div>
        <div class="intro">
            <h1>嗨 !</h1>
            <div class="dis-flex greet"><h1> 我是 </h1><TextFliper :textList="['李東遠', 'Front-End Developer.', '前端工程師']"></TextFliper></div>
            <div class="personalInfo">
                <h3>臺中教育大學 數位內容科技學系</h3>
                <h3>0911572605</h3>
                <h3>alan93072@gmail.com</h3>
            </div>
            <div class="otherDocument">
                <a href=""><button>Resume</button></a>
                <a href=""><button>CV</button></a>
            </div>
        </div>
    </div>
</section>
</template>
<style lang="scss">
#hero{
    height: 100vh;
    pointer-events: none;
    h1{
        font-size: 3rem;
        @include pad-width{
            font-size: 2em;
        }
        margin: 0;
    }
    .container{
        justify-content:space-evenly;
        align-items: center;
        flex: 0 0 content;
        flex-wrap: wrap;
    }
    .intro{
        text-align: start;
        z-index: 1;
        .personalInfo{
            margin: 30px 6px;
            h3{
                margin: 6px 0;
            }
        }
        .greet{
            gap: 1rem;
        }
        .otherDocument{
            button{
                padding: 0.8em 1.5em;
                margin-right: .6em;
                background-color: $main-color-secondary;
                border: #fff 1px solid;
                border-radius: .8em;
                color: #fff;
            }
        }
    }
    .graph{
        @include pad-width{
            transform: scale(.6);
        }
        .mask{
            width: 500px;
            height: 500px;
            clip-path: path(var(--mask-graph));
        }
        .img{
            width: 99%;
            height: 99%;
        }
    }
}
.bg-blue{
    background-color: $main-color-secondary;
}
</style>