<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import LoadingScene from './components/LoadingScene.vue';
import Home from './views/Home.vue';
</script>

<template>
  <LoadingScene :isLoadComplete="true"></LoadingScene>
  <Home></Home>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  z-index: -2;
}
</style>
