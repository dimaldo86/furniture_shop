<script setup lang='ts'>
import Ubutton from '@/components/ui/Ubutton.vue'
</script>

<template>
    <section class="">

        <div class="md:absolute  z-10 bottom-[130px] right-20 2xl:right-[430px] bg-white text-main  w-[530px]  xl:w-[630px] h-[440px] py-8 px-10 lg:py-12 lg:px-14">
                <h1 class="text-4xl mb-5">Luxury homeware for people who love timeless design quality</h1>
                <div class="text-text text-lg mb-28">Shop the new Spring 2022 collection today</div>
                <Ubutton>View collection</Ubutton>
        </div>
        <div class="md:relative  max-w-[1920px] w-auto h-auto max-h-[700px] mx-auto flex items-center justify-center">
            <img class="w-full h-full flex-shrink-0 object-cover 2xl:object-fill" src="assets/img/home/hero.png" alt="hero">
        </div>
    </section>
</template>
