<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue';

// * 外部參數
const props = defineProps({
    contentAmount: {
        type: Number,
        default: 5
    },
    imageList: {
        type: Array,
        default() {
            return []
        }
    }
})
const { contentAmount } = toRefs(props);

// * 管理項目狀態，
// - visible為目前項目，呈現於中間；
// - next-slide為下個項目，右邊圓圈；prev-slide為前個項目，左邊圓圈；
// * animating + move-up/scale-down為動畫中。
let statusList = reactive(Array(contentAmount.value));

// * 滑動方向
let slideWay = ref(-1);

// * 目前呈現項目的索引、互動後將要呈現的索引
let currentIndex = ref(0);

function refreshSL() {
    const next = (currentIndex.value + 1) % contentAmount.value;
    const prev = (currentIndex.value + contentAmount.value - 1) % contentAmount.value;

    statusList[currentIndex.value] = 'visible ';
    statusList[next] = 'next-slide static ';
    statusList[prev] = 'prev-slide static ';
    for (let i = 0; i < contentAmount.value; i++) {
        if (i == currentIndex.value || i == next || i == prev) continue;
        statusList[i] = '';
    }
}
onMounted(() => {
    refreshSL();
})

// * 使用者互動行為
function slideTo(dest) {
    statusList[dest] = String(statusList[dest]).replace(' static', ' animating move-up');
    console.log('next index: ' + dest);
    const loopIndex = contentAmount.value - 1;
    if ((currentIndex.value * 1 + dest * 1) % loopIndex == 0) slideWay.value = -(dest - currentIndex.value) % 2; //循環反向運算
    slideWay.value = (dest - currentIndex.value) % 2;
    const prev = (currentIndex.value + loopIndex + 1 - slideWay.value) % (loopIndex + 1);
    statusList[prev] = String(statusList[prev]).replace(' static', ' animating scale-down');
    setTimeout(visibleChange(dest), 410);
}

// * 自動行為
function visibleChange(index) {
    return function () {
        currentIndex.value = index;
        refreshSL();
    }
}
</script>
<template>
    <div class="radial-slider-wrapper">
        <ul class="radial-slider" :style="`--slide-way:${slideWay}`">
            <li v-for="i of contentAmount" class="dis-flex center" :class="statusList[i - 1]"
                :style="`--imageUrl:url(${imageList[i - 1]});`" @click="slideTo(i - 1)">
                <div class="wrapper">
                    <slot :name="`slide${i}`">
                    </slot>
                </div>
                <span class="indicator text-large">
                    <span class="left"></span>
                    <span class="right"></span>
                </span>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
.radial-slider-wrapper {
    position: relative;
    overflow: hidden;
}

.radial-slider {
    >li {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        opacity: 0;
        pointer-events: none;
        background-image: var(--imageUrl);
        background-position: right 40% top 10%;
        background-repeat: no-repeat;
        background-size: 100% 180%;

        @include phone-width {
            background-size: 200% 200%;
            background-position: right 80% top 10%;
        }
        @include small-phone-width{
            background-size: 400% 200%;
        }

        .indicator {
            position: absolute;
            width: 100vw;
            height: 100vh;

            .indicator-name {
                position: absolute;
                height: fit-content;
                top: 0;
                bottom: 0;
                margin: auto;
            }

            .left,
            .right {
                position: absolute;
                height: calc(5vw + 5vh);
                width: calc(5vw + 5vh);

                @include phone-width {
                    height: 88px;
                    width: 88px;
                }

                border-radius: 50%;
                top: 0;
                bottom: 0;
                margin: auto;

                &::after {
                    display: block;
                    content: '';
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background-color: $main-color;
                    clip-path: polygon(50% 24%,
                            12% 55%,
                            30% 76%,
                            29% 65%,
                            22% 57%,
                            50% 35%,
                            78% 57%,
                            71% 65%,
                            50% 49%,
                            29% 65%,
                            30% 76%,
                            50% 60%,
                            70% 76%,
                            88% 55%);
                }

                @include phone-width {
                    top: unset;
                    bottom: calc(6vh - 44px);
                }
            }
        }

        .wrapper {
            transition: all .4s ease-out;
            color: $text-color;
        }

        &:nth-child(even) {
            background-color: #fff;
        }

        &:nth-child(odd) {
            background-color: $main-color-secondary;
        }
    }

    >li.visible {
        position: relative;
        opacity: 1;
        pointer-events: all;
        transition: background-position 20s cubic-bezier(0.24, 0.04, 0.77, 0.95);
        background-position: right 40% top 65%;

        .indicator {
            opacity: 0;
            pointer-events: none;
        }
    }

    >li.animating,
    >li.prev-slide,
    >li.next-slide {
        opacity: 1;
        pointer-events: all;
    }

    >li.animating {
        z-index: 2;
    }

    >li.prev-slide,
    >li.next-slide {
        cursor: pointer;
        transition: clip-path .4s ease-in, transform .4s ease-in;
        animation: clicked .2s;
        z-index: 3;

        .wrapper {
            opacity: 0;
        }
    }

    >li.static:hover {
        --progress-percent: 30%;
    }

    >li.move-up {
        /* class added to the navigation round element when clicked - used to create the click effect */
        --progress-percent: 140%;

        @include phone-width {
            --progress-percent: 140%;
        }

        .wrapper {
            transform: translateX(calc(var(--slide-way, 0) * 20%));
        }
    }

    >li.scale-down {
        transform: scale(0);
    }

    >li.next-slide {
        clip-path: circle(var(--progress-percent, 5%) at 92.14% 50%);
        transform-origin: 92.14% 50%;

        @include phone-width {
            clip-path: circle(var(--progress-percent, 44px) at 93% 94%);
            transform-origin: 93% 94%;
        }

        .indicator-name {
            right: 13vw;
        }

        .left {
            opacity: 0;
            pointer-events: none;
        }

        .right {
            right: 7.86vw;
            transform: translateX(45%) rotate(90deg);
        }
    }

    >li.prev-slide {
        clip-path: circle(var(--progress-percent, 5%) at 7.86% 50%);
        transform-origin: 7.86% 50%;

        @include phone-width {
            clip-path: circle(var(--progress-percent, 44px) at 7% 94%);
            transform-origin: 5% 94%;
        }

        .indicator-name {
            left: 13vw;
        }

        .right {
            opacity: 0;
            pointer-events: none;
        }

        .left {
            left: 7.86vw;
            transform: translateX(-45%) rotate(-90deg);
        }
    }
}

@keyframes clicked {
    from {
        transform: scale(.8);
    }

    to {
        transform: scale(1);
    }
}
</style>