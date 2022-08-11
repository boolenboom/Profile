<script setup>import { onMounted, ref } from 'vue';

let menu = function(){
    let switchStatus = ref('close');
    return{
        toggle:function(){
            switchStatus.value = switchStatus.value == 'close' ? 'open' : 'close';
        },
        open:function(){
            switchStatus.value = 'open';
        },
        close:function(){
            switchStatus.value = 'close';
        },
        status:function(){
            return switchStatus.value;
        }
    }
}();
let direction = ref('scrollUp');
let checkScrollDirect = function (){
    let lastPos = 0;
    return function(entries){
        let progress = entries[0].intersectionRatio;
        if(progress > lastPos){
            direction.value = 'scrollDown';
            menu.close();
        }
        else if(progress < lastPos){
            direction.value = 'scrollUp';
        }
        lastPos = progress;
    }
}()
onMounted(()=>{
    let watchDom = document.querySelector('#app');
    let ob = new IntersectionObserver(checkScrollDirect, {
        rootMargin: '99999px 0px 0px 0px',
        threshold: function () {
            let arr = Array(10000).fill(0);
            for (let index = 0; index < arr.length; index++) {
                arr[index] = (index + 1) * 0.0001;
            }
            return arr;
        }(),
    })
    ob.observe(watchDom);
})
</script>
<template>
    <nav class="nav pos-fixed w-100 dis-flex" :class="direction">
        <a href="#hero" class="LOGO">Lee's profile</a>
        <menu class="dis-flex text-medium" :class="`${menu.status()}`">
            <button class="menu-switch" @click="menu.toggle()">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <a href="#summary" @click="menu.close()">Summary</a>
            <a href="#portfolio" @click="menu.close()">Works & Links</a>
        </menu>
    </nav>
</template>
<style lang="scss">
.nav{
    top: 0;
    left: 0;
    padding: 30px;
    transition: transform .35s;
    z-index: 999;
    .LOGO{
        margin-left: 0;
        margin-right: auto;
        width: 50px;
        color: $text-color;
    }
    menu{
        margin-left: 0;
        @include phone-width{
            max-height: 50px;
            overflow-y: hidden;
            transition: max-height .3s ease-in;
            &.open{
                max-height: 100vh;
                &::before{
                    height: 100vh;
                }
            }
            &::before{
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 100vw;
                height: 0vh;
                background-color: $main-color;
                z-index: -1;
                transition: height .3s ease-in;
            }
        }
        &.dis-flex{
            @include phone-width{
                flex-direction: column;
                gap: 36px;
                text-align: end;
            }
        }
        a{
            margin-inline-start: 3vmin;
            margin-inline-end: 3vmin;
            color: $text-color;
            overflow-wrap: break-word;
            text-align: start;
        }
    }
}
button.menu-switch{
    display: none;
    @include phone-width{
        display: initial;
        padding: 3px 6px;
    }
    cursor: pointer;
    margin-left: auto;
    padding: 6px 12px;
    width: fit-content;
    background-color: transparent;
    border: 1px solid $text-color;
    div{
        width: 36px;
        height: 4px;
        background-color: $text-color;
        margin-block: 6px;
        @include small-phone-width{
            width: 12px;
            margin-block: 2px;
            height: 2px;
        }
    }
}
.scrollUp{
    transform: translateY(0%);
}
.scrollDown{
    transform: translateY(-100%);
    transition-delay: .6s;
}
</style>