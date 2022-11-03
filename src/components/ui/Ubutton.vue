<script setup lang='ts'>



 const props = defineProps({
    background: {
        type: String,
        default: "bg-lightGray"
    },
    type: {
        type: String,
        default: "button",
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
    <button
        v-if="type === 'button'"
        :class="[background, color]"
        :type="type"
        class="font-satoshi md:w-[170px] h-[56px] w-full sm:w-[80%] self-center md:self-start  transition duration-500 ease-in-out hover:bg-main hover:text-white"
    >
        <slot></slot>
    </button>
    <router-link
        v-else
        :to="to"
        :class="[ ]"
        :style="styleSize"
        :type="type"

    >
        <slot></slot>
    </router-link>
</template>
