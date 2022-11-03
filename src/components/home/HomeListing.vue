<script setup lang='ts'>
import HomeListingCard from '@/components/home/HomeListingCard.vue'
import Ubutton from '@/components/ui/Ubutton.vue'


const props = defineProps({
  products: {
    required: true,
  },
});

</script>

<template>
    <section class="py-5">
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
                 <Ubutton>View collection</Ubutton>
            </div>
        </div>
    </section>
</template>