<template>
<div class="transitionAnimation fullScreen">
    <div class="pin">
        <slot></slot>
    </div>
</div>
</template>
<style>
.transitionAnimation{
    position: relative;
    pointer-events: none;
    z-index: 2;
}
</style>