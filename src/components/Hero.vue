<script setup>
import TextFliper from './TextFliper.vue';

</script>
<template>
    <section id="hero" class="dis-flex center">
        <div class="intro">
            <h1 class="text-larger">嗨 !</h1>
            <div class="dis-flex text-larger">
                <h1> 我 </h1>
                <TextFliper :textList="['是李東遠', '熱愛思考', '走在開發的路上']"></TextFliper>
            </div>
            <div class="info dis-flex">
                <div class="personalInfo text-medium">
                    <h3>臺中教育大學 數位內容科技學系</h3>
                    <h3>0911572605</h3>
                    <h3>alan93072@gmail.com</h3>
                </div>
                <div class="otherDocument text-small">
                    <a href="https://drive.google.com/file/d/1sIq1HVmDY5nQ9780qLiPzQlfC8r1VM-R/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer">Resume</a>
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
        margin: 0;
    }
    .intro{
        width: 80%;
        text-align: start;
        z-index: 1;
        @include phone-width{
            writing-mode: vertical-rl;
            inline-size: 80vh;
        }
        .info{
            flex-direction: column;
            @include phone-width{
                flex-direction: row;
                justify-content: end;
                gap: 24px;
            }
        }
        .personalInfo{
            flex: 1 0 auto;
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
            flex: 0 0 auto;
            margin-block-start: auto;
            text-align: end;
            writing-mode: horizontal-tb;
            a{
                pointer-events: fill;
                padding-block: .6em;
                padding-inline: 1.2em;
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