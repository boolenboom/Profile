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
    <span :href="url" class="rotate-effect">
        <svg viewBox="0 0 84 84">
            <defs>
                <path id="pathCircle" stroke="#fff" fill="none" d="M42 0a42 42 0 0 1 0 84a42 42 0 0 1 0 -84z">
                </path>
            </defs>
            <text fill="#21326a" stroke="#21326a" stroke-width="1">
                <textPath href="#pathCircle">
                    <slot></slot>
                </textPath>
            </text>
        </svg>
    </span>
</template>
<style lang="scss">
.rotate-effect {
    display: block;
    font-size: var(--fz,24px);
    inline-size: var(--btn-radius,75px);
    block-size: var(--btn-radius,75px);
    line-height: var(--btn-radius,75px);
    
    @include phone-width{
        font-size: var(--fz,24px);
        inline-size: var(--btn-radius,63px);
        block-size: var(--btn-radius,63px);
        line-height: var(--btn-radius,63px);
    }
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