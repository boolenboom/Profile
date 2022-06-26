<script setup>

const props = defineProps({
    url:{
        type:String,
        default:'#'
    },
    BtnText:{
        type:String,
        default:'Btn................'
    }
})
</script>
<template>
    <a :href="url" class="rotate-Btn">
        <svg viewBox="0 0 84 84">
            <defs>
                <path id="pathCircle" stroke="#fff" fill="none" d="M42 0a42 42 0 0 1 0 84a42 42 0 0 1 0 -84z">
                </path>
            </defs>
            <text>
                <textPath href="#pathCircle">{{BtnText}}</textPath>
            </text>
        </svg>
    </a>
</template>
<style lang="scss">

.rotate-Btn {
    --fz: 24px;
    --btn-radius: 84px;
    @include phone-width{
        --fz: 24px;
        --btn-radius: 42px;
    }
    font-size: var(--fz);
    display: block;
    inline-size: var(--btn-radius);
    block-size: var(--btn-radius);
    line-height: var(--btn-radius);
    will-change: transform;
    animation: touchRotate 8s linear infinite paused forwards;
    @include phone-width{
        animation-play-state: running;
    }

    svg{
        overflow: unset;
    }

    textPath {
        letter-spacing: 2px;
    }

    &:hover {
        animation-play-state: running;
    }
}
@keyframes touchRotate {
    from {
        transform: rotate(1turn);
    }
}
</style>