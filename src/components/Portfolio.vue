<script setup>
import BlackHole from './BlackHole.vue';
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
                    <RadialSlider 
                    :imageList="['https://picsum.photos/id/69/1400/800',
                                'https://picsum.photos/id/666/1400/800',
                                'https://picsum.photos/id/678/1400/800',
                                'https://picsum.photos/id/123/1400/800']"
                    :contentAmount="4">
                        <template #slide1>
                            <h2>Travel Taiwan</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            <a href="#0" class="btn">前往</a>
                        </template>
                        <template #slide2>
                            <h2>CSS Rush</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            <a href="#0" class="btn">前往</a>
                        </template>
                        <template #slide3>
                            <h2>Lee's profile</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            <a href="#0" class="btn">前往</a>
                        </template>
                        <template #slide4>
                            <h2>Slide #4 Title</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur.</p>
                            <a href="#0" class="btn">前往</a>
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