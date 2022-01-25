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
            <h2>HI !</h2>
            <div class="dis-flex greet"><h1> I 'm </h1><TextFliper :textList="['Alan Lee.', 'Front End Developer.', 'Gamer.']"></TextFliper></div>
            <h3>臺中教育大學 數位內容科技學系</h3>
            <h3>0911572605</h3>
            <h3>alan93072@gmail.com</h3>
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
    > *{
        justify-content: center;
    }
    .intro{
        text-align: start;
        .greet{
            h1{
                margin: 0;
                font-size: 3rem;
            }
            gap: 1rem;
        }
    }
    .graph{
        .mask{
            width: 500px;
            height: 500px;
            clip-path: path(var(--mask-graph));
        }
        .img{
            width: 100%;
            height: 100%;
        }
    }
}
.bg-blue{
    background-color: #21326a;
}
</style>