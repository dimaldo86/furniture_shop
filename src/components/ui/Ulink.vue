<script setup lang='ts'>

 const props = defineProps({
    background: {
        type: String,
        default: "bg-lightGray"
    },
    to: {
        type: String,
        required: false,
    },
    color: {
        type: String,
        default: "text-main",
    }
});
</script>

<template>
    <router-link
        :to="to"
        :class="[background, color]"
        class="flex items-center justify-center font-satoshi md:w-[170px] h-[56px] w-full sm:w-[80%] self-center md:self-start  transition duration-500 ease-in-out hover:bg-main hover:text-white"
    >
        <slot></slot>
    </router-link>
</template>
