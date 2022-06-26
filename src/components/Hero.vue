<script setup>
import TextFliper from './TextFliper.vue';

</script>
<template>
    <section id="hero" class="dis-flex center">
        <div class="intro">
            <h1 class="text-larger">嗨 !</h1>
            <div class="dis-flex text-larger">
                <h1> 我 </h1><TextFliper :textList="['是李東遠', '追尋核心', '是前端工程師']"></TextFliper>
            </div>
            <div class="personalInfo text-medium">
                <h3>臺中教育大學 數位內容科技學系</h3>
                <h3>0911572605</h3>
                <h3>alan93072@gmail.com</h3>
            </div>
            <div class="otherDocument text-small">
                <a href="">Resume</a>
                <a href="">CV</a>
            </div>
        </div>
    </section>
</template>
<style lang="scss">




#hero{
    height: 100vh;
    pointer-events: none;
    h1{
        margin: 0;
    }
    .intro{
        width: 80%;
        text-align: start;
        z-index: 1;
        @include phone-width{
            writing-mode: vertical-rl;
            inline-size: 70vh;
        }
        .personalInfo{
            text-align: end;
            margin-block-start: auto;
            margin-block-end: 5vmin;
            @include pc-width{
                margin-block: 3vh;
                margin-inline: 6px;
            }
            h3{
                margin-block: .2rem;
                @include pc-width{
                    margin-block: .5rem;
                }
            }
        }
        .otherDocument{
            margin-block-start: auto;
            text-align: end;
            writing-mode: horizontal-tb;
            a{
                pointer-events: fill;
                padding-block: .8em;
                padding-inline: 1.5em;
                margin-inline-end: .6em;
                background-color: $main-color-secondary;
                border: #fff 1px solid;
                border-radius: .8em;
                color: #fff;
            }
        }
    }
}
</style>