<script setup lang='ts'>
import HomeListingCard from '@/components/home/HomeListingCard.vue'
import Ulink from '@/components/ui/Ulink.vue'


const props = defineProps({
  products: {
    required: true,
  },
});

</script>

<template>
    <section class="pt-5 pb-10">
        <div class="container">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
                <HomeListingCard
                    v-for="product of products"
                    :key="product.id"
                    :id="product.id"
                    :title="product.title"
                    :src="product.src"
                    :price="product.price"
                    :type="product.type"
                ></HomeListingCard>
            </div>
            <div class="flex justify-center items-center mt-12">
                <Ulink to="/allCollection">View collection</Ulink>
            </div>
        </div>
    </section>
</template>