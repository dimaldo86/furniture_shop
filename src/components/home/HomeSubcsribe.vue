<script setup lang='ts'>
import Uform from '@/components/ui/Uform.vue'

</script>

<template>
    <section class="subscribe bg-subscribe bg-center bg-no-repeat bg-cover py-20">
        <div class="container">
            <div class="text-white flex flex-col justify-center items-center">
                <h2 class="text-2xl  sm:text-3xl lg:text-4xl">Join the club and get the benefits</h2>
                <div class="mt-3 text-center text-lg font-satoshi w-1/2 xl:w-1/3">
                    Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
                </div>
                <div class="flex items-center mt-7">
                    <div class="flex items-center font-satoshi ml-9">
                        <img src="/assets/img/subscribe/checkmark.svg" alt="checkmark" >
                        <span class="ml-2 text-base">Exclusive offers</span>
                    </div>
                    <div class="flex items-center font-satoshi ml-9">
                        <img src="/assets/img/subscribe/checkmark.svg" alt="checkmark" >
                        <span class="ml-2 text-base">Free events</span>
                    </div>
                    <div class="flex items-center font-satoshi ml-9">
                        <img src="/assets/img/subscribe/checkmark.svg" alt="checkmark" >
                        <span class="ml-2 text-base">Large discounts</span>
                    </div>
                </div>
                <Uform></Uform>
            </div>

        </div>
    </section>
</template>