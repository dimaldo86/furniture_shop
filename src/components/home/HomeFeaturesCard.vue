<script setup lang='ts'>
import { featuresCards}  from '@/ts/constants/featuresCard'



</script>

<template>
    <div
        v-for="card in featuresCards"
        :key="card.id"
        class="flex flex-col text-main bg-lightGray p-12 md:p-10">
        <div class="">
            <img :src="card.src" :alt="card.name" >
        </div>
        <h4 class="text-xl mt-4">{{ card.title }}</h4>
        <div class="text-base mt-4">{{ card.desc }}</div>
    </div>
</template>