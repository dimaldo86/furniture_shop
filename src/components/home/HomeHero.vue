<script setup lang='ts'>

import Ulink from '@/components/ui/Ulink.vue'

</script>

<template>
    <section class="relative pt-[122px]">
        <div class="flex flex-col justify-between md:absolute right-[8%] bottom-[22%] z-10 2xl:bottom-0 2xl:right-[22%]   bg-white text-main w-full h-auto  md:w-[530px] md:h-[400px] xl:w-[630px]  py-10 px-12 lg:py-12 lg:px-14">
                <h1 class="text-2xl sm:text-3xl lg:text-4xl mb-10 md:mb-0">Luxury homeware for people who love timeless design quality</h1>
                <div class="text-text text-lg mb-16 sm:mb-20 md:mb-0">Shop the new Spring 2022 collection today</div>
                <Ulink to="/allCollection">View collection</Ulink>
        </div>
        <div class=" max-w-[1920px] w-auto md:w-[1024px] lg:w-auto md:h-[650px] mx-auto ">
            <img class="w-full h-full object-cover 2xl:object-fill" src="assets/img/home/hero.png" alt="hero">
        </div>
    </section>
</template>
