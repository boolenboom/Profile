<script setup>
import TextFliper from './TextFliper.vue';

</script>
<template>
<section id="hero" class="dis-flex center">
        <div class="intro">
            <h1>嗨 !</h1>
            <div class="dis-flex"><h1> 我 </h1><TextFliper :textList="['是李東遠', '追尋核心', '是前端工程師']"></TextFliper></div>
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
</section>
</template>
<style lang="scss">
#hero{
    height: 100vh;
    pointer-events: none;
    h1{
        font-size: 2em;
        @include pc-width{
            font-size: 8rem;
        }
        margin: 0;
    }
    .intro{
        width: 80%;
        text-align: start;
        z-index: 1;
        .personalInfo{
            text-align: end;
            margin: 120px 6px;
            @include pc-width{
                margin: 36px 6px;
            }
            h3{
                font-size: 1rem;
                margin: .2rem 0;
                @include pc-width{
                    font-size: 2rem;
                    margin: .5rem 0;
                }
            }
        }
        .otherDocument{
            text-align: end;
            button{
                pointer-events: fill;
                padding: 0.8em 1.5em;
                margin-right: .6em;
                background-color: $main-color-secondary;
                border: #fff 1px solid;
                border-radius: .8em;
                color: #fff;
            }
        }
    }
}
.bg-blue{
    background-color: $main-color-secondary;
}
</style>