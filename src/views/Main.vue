<script setup lang='ts'>
import HomeHero from '@/components/home/HomeHero.vue'
import HomeFeatures from '@/components/home/HomeFeatures.vue'
import HomeListing from '@/components/home/HomeListing.vue'
import api from '@/api/api.ts'

import { onMounted, ref } from 'vue'

const products = ref([])

onMounted(async () => {
        products.value = await api.getProducts();
    }
)

</script>

<template>
   <main>
        <HomeHero></HomeHero>
        <HomeFeatures></HomeFeatures>
        <HomeListing :products="products"></HomeListing>
   </main>
</template>

