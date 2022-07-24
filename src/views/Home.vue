<script setup>
import Navigation from '../components/Navigation.vue';
import Hero from '../components/Hero.vue';
import Summary from '../components/Summary.vue';
import Portfolio from '../components/Portfolio.vue';
import FixedBackground from '../components/FixedBackground.vue';
import TransitionAnimation from '../components/TransitionAnimation.vue';
import TextFlashMarquee from '../components/TextFlashMarquee.vue';
import StepFlash from '../components/StepFlash.vue';

</script>
<template>
<Navigation></Navigation>
<FixedBackground></FixedBackground>
<Hero></Hero>
<TransitionAnimation class="hero2summary">
    <TextFlashMarquee flashText="summary"></TextFlashMarquee>
</TransitionAnimation>
<Summary></Summary>
<TransitionAnimation class="summary2portfolio">
    <StepFlash aniText="work&links"></StepFlash>
</TransitionAnimation>
<Portfolio></Portfolio>
</template>