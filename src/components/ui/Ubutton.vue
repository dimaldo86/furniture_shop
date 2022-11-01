<script setup lang='ts'>
import { reactive } from 'vue'

const styleSize = reactive({
  width: '170px',
  height: '56px'
})

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
        default: "#2A254B",
    }
});
</script>

<template>
    <button
        v-if="type === 'button'"
        :style="[styleSize]"
        :class="[background, color]"
        :type="type"
        class="font-satoshi transition duration-500 ease-in-out hover:bg-main hover:text-white"
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

