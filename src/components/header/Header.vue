<script setup lang='ts'>
import HeaderTop from '@/components/header/HeaderTop.vue'
import HeaderNav from '@/components/header/HeaderNav.vue'
import HeaderMobile from '@/components/header/HeaderMobile.vue'

</script>

<template>
    <div class="container">
        <header class="fixed top-0 left-0 z-50 bg-white w-full border border-b-4 border-main px-7 ">
                <HeaderTop></HeaderTop>
                <HeaderNav></HeaderNav>
                <HeaderMobile></HeaderMobile>
        </header>
    </div>
</template>
