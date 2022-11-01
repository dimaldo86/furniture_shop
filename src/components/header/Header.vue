<script setup lang='ts'>
import HeaderTop from '@/components/header/HeaderTop.vue'
import HeaderNav from '@/components/header/HeaderNav.vue'
import HeaderMobile from '@/components/header/HeaderMobile.vue'



</script>

<template>
    <div class="container">
        <header class="max-w-[1440px] px-7">
                <HeaderTop></HeaderTop>
                <HeaderNav></HeaderNav>
                <HeaderMobile></HeaderMobile>
        </header>
    </div>
</template>
