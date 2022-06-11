<script setup>
import { onMounted, reactive, ref, toRefs, watch } from 'vue';

// * 外部參數
const props = defineProps({
    contentAmount:{
        type:Number,
        default:5
    },
    imageList:{
        type:Array,
        default(){
            return []
        }
    }
})
const { contentAmount } = toRefs( props );

// * 管理項目狀態，
// - visible為目前項目，呈現於中間；
// - next-slide為下個項目，右邊圓圈；prev-slide為前個項目，左邊圓圈；
// * is-animating + move-up/scale-down為動畫中。
let statusList = reactive([]);
statusList.length = contentAmount.value;

// * 滑動方向
let slideWay = ref(-1);

// * 目前呈現項目的索引、互動後將要呈現的索引
let currentIndex = ref(0);
let nextIndex = ref(0);

function refreshSL(){
    statusList.fill('');
    const next = (currentIndex.value + 1) % contentAmount.value;
    const prev = (currentIndex.value + contentAmount.value - 1) % contentAmount.value;

    statusList[currentIndex.value] = 'visible ';
    statusList[ next ] = 'next-slide static ';
    statusList[ prev ] = 'prev-slide static ';
}
onMounted(()=>{
    refreshSL();
})

// * 使用者互動行為
function slideTo( dest ){
    nextIndex.value = dest;
    console.log('next index: ' + nextIndex.value);
}
watch( nextIndex, (newVal, oldVal)=>{
    statusList[newVal] = statusList[newVal].split(' ')
        .filter( str => str !== 'static' && ( str === 'next-slide' || str === 'prev-slide' ) );
    statusList[newVal] += ' is-animating move-up ';

    let prev = (currentIndex.value + contentAmount.value - (newVal - currentIndex.value)) % contentAmount.value;
    statusList[prev] = statusList[prev].split(' ')
        .filter( str => str !== 'static' && ( str === 'next-slide' || str === 'prev-slide' ) );
    statusList[prev] += ' is-animating scale-down ';

    if(newVal == 0 && oldVal == contentAmount.value - 1){
        slideWay.value = 1;
    }
    else if(newVal == contentAmount.value - 1 && oldVal == 0 ){
        slideWay.value = -1;
    }
    else{
        slideWay.value = nextIndex.value - currentIndex.value;
    }
});

// * 自動行為
function visibleChange(eventInfo){
    if( !eventInfo.target.className.includes('move-up') ) return;
    console.log(eventInfo);
    currentIndex.value = nextIndex.value;
    refreshSL();
}
</script>
<template>
    <div class="radial-slider-wrapper">
        <ul class="radial-slider" :style="`--slide-way:${slideWay}`">
            <li v-for="i of contentAmount" 
                class="dis-flex center" 
                :class="statusList[i - 1]" 
                :style="`--imageUrl:url(${imageList[i - 1]});`"
                @click.prevent = "slideTo( i - 1 )"
                @transitionend = "visibleChange">
                <div class="filter-color"></div>
                <div class="wrapper">
                    <slot :name="`slide${i}`"></slot>
                </div>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">





.radial-slider-wrapper{
    position: relative;
}
.radial-slider{
    > li{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        opacity: 0;
        pointer-events: none;
        .filter-color{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        .wrapper{
            transition: all .4s ease-out;
            color: $text-color;
        }
        &:nth-child(even){
            background-color: #fff;
        }
        &:nth-child(odd){
            background-color: $main-color-secondary;
        }
    }
    > li.visible{
        position: relative;
        opacity: 1;
        pointer-events: all;
    }
    > li.is-animating,
    > li.prev-slide,
    > li.next-slide{
        opacity: 1;
        pointer-events: all;
    }
    > li.is-animating{
        z-index: 2;
    }
    > li.prev-slide,
    > li.next-slide{
        cursor: pointer;
        transition: clip-path .4s ease-in, transform .4s ease-in;
        animation: clicked .2s;
        z-index: 3;
    }
    > li.static:hover{
        --progress-percent: 35%;
    }
    > li.move-up{
        /* class added to the navigation round element when clicked - used to create the click effect */
        --progress-percent: 120%;
        @media (max-aspect-ratio: 1/1) {
            --progress-percent: 140%;
        }
        .wrapper{
            transform: translateX( calc( var(--slide-way,0) * 20% ) );
        }
    }
    > li.scale-down{
        /* class added to the navigation round element to create the scale down effect  */
        transform: scale(0);
    }
    > li.next-slide{
        clip-path: circle( var(--progress-percent, 5%) at 92.14% 50%);
        transform-origin: 92.14% 50%;
        @media (max-aspect-ratio: 1/1) {
            clip-path: circle( var(--progress-percent, 20%) at 90% 80%);
            transform-origin: 100% 80%;
        }
        .wrapper{
            transform: translateX( 50vh );
        }
    }
    > li.prev-slide{
        clip-path: circle( var(--progress-percent, 5%) at 7.86% 50%);
        transform-origin: 7.86% 50%;
        @media (max-aspect-ratio: 1/1) {
            clip-path: circle( var(--progress-percent, 20%) at 10% 80%);
            transform-origin: 0% 80%;
        }
        .wrapper {
            transform: translateX(-50vh);
        }
    }
}
@keyframes clicked {
    from{
        transform: scale(.8);
    }
    to{
        transform: scale(1);
    }
}

.initial li.visible .wrapper{
    transform: translateY(300px);
}
.initial li.next-slide,.initial li.prev-slide{
    transform: translateY(300px);
}
</style>