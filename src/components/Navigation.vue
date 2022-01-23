<script setup>import { onMounted, ref } from 'vue';

let direction = ref('scrollUp');
let checkScrollDirect = function (){
    let lastPos = 0;
    let ticking = false;
    return function(){
        if(!ticking){
            requestAnimationFrame(()=>{
                if(window.scrollY > lastPos){
                    direction.value = 'scrollDown';
                }
                else if(window.scrollY < lastPos){
                    direction.value = 'scrollUp';
                }
                ticking = false;
                lastPos = window.scrollY;
            })
        }
        ticking = true;
    }
}
onMounted(()=>{
    window.addEventListener( 'scroll', checkScrollDirect() );
})
</script>
<template>
    <nav class="nav pos-fixed w-100 dis-flex" :class="direction">
        <router-link to="/" class="LOGO">LOGO</router-link>
        <div class="d-flex menu">
            <router-link to="/#summary">Summary</router-link>
            <router-link to="/#portfolio">Portfolio & Links</router-link>
            <router-link to="/#skills">Skills</router-link>
            <router-link to="/#experience">Experience</router-link>
        </div>
    </nav>
</template>
<style lang="scss">
.nav{
    top: 0;
    left: 0;
    padding: 30px;
    transition: transform .35s;
    .LOGO{
        margin-left: 0;
        margin-right: auto;
    }
    .menu{
        margin-left: 0;
        a{
            margin-left: 3rem;
            margin-right: 3rem;
        }
    }
}
.scrollUp{
    transform: translateY(0%);
}
.scrollDown{
    transform: translateY(-100%);
}
</style>