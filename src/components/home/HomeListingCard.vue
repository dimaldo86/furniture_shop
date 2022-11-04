<script setup lang='ts'>
import Ulink from '@/components/ui/Ulink.vue'

const productProps = defineProps({
    id: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    src: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

</script>

<template>
    <router-link :to="`/${id}`" class="flex flex-col text-main justify-start cursor-pointer hover:-translate-y-4 hover:shadow-2xl transition duration-500 ease-in-out">

        <div  class="w-full h-full transition duration-500 ease-in-out">
            <img class="w-full h-full object-cover" :src="src" :alt="title">
       </div>


        <div class="p-2 flex flex-col ">
            <h4 class="text-xl mt-6">{{ title }}</h4>
            <div class="font-satoshi text-lg mt-2">{{ price }}</div>
        </div>

    </router-link>
</template>

