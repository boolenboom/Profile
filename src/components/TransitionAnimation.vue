<template>
<div class="transitionAnimation fullScreen">
    <slot></slot>
</div>
</template>
<style>
.transitionAnimation{
    position: relative;
    pointer-events: none;
    z-index: 2;
}
</style>