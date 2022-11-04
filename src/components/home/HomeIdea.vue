<script setup lang='ts'>
import Ulink from '@/components/ui/Ulink.vue'

</script>

<template>
    <section class="py-8 sm:py-12 ">
        <div class="container">
            <div class="grid grid-cols-1 lg:grid-cols-2 lg:max-h-[678px] gap-5">
                <div class="flex flex-col justify-between  bg-main text-white py-6 px-8 sm:py-10 sm:px-12 lg:py-12 lg:px-14 h-[380px] md:h-[480px]">
                    <div class="lg:mb-[205px]">
                        <h2 class="text-2xl sm:text-3xl lg:text-4xl mb-5 sm:mb-10 md:mb-0">It started with a small idea</h2>
                        <div class="text-lg mt-3 font-satoshi">
                            A global brand with local beginnings, our story begain in a small studio in South London in early 2014
                        </div>
                    </div>

                    <Ulink class="hover:bg-text" to="/allCollection">View colletion</Ulink>
                </div>
                <div class="w-full h-[380px] lg:h-full md:h-[480px] ">
                    <img class="w-full h-full object-cover" src="/assets/img/idea/idea.png" alt="idea">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>

</style>