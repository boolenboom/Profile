<script setup>
import BlackHole from './BlackHole.vue';
import RadialSlider from './RadialSlider.vue';

</script>
<template>
    <div class="transitionAnimation">
        <BlackHole aniText="work&link"></BlackHole>
    </div>
    <div class="portfolio">
        <RadialSlider 
        :imageList="['https://picsum.photos/id/69/1400/800?blur=2',
                    'https://picsum.photos/id/666/1400/800',
                    'https://picsum.photos/id/678/1400/800',
                    'https://picsum.photos/id/123/1400/800']"
        :contentAmount="4">
            <template #slide1>
                <h2>Travel Taiwan</h2>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <a href="#0" class="btn">Learn More</a>
            </template>
            <template #slide2>
                <h2>CSS Rush</h2>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <a href="#0" class="btn">Learn More</a>
            </template>
            <template #slide3>
                <h2>Lee's profile</h2>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <a href="#0" class="btn">Learn More</a>
            </template>
            <template #slide4>
                <h2>Slide #4 Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <a href="#0" class="btn">Learn More</a>
            </template>
        </RadialSlider>
    </div>
</template>