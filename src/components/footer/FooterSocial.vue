<script setup lang='ts'>
import { socialLinks } from '@/ts/constants/social'
</script>



<template>
    <ul class="flex items-center justify-end">
        <li
            class="mr-6 last:mr-0"
            v-for="link in socialLinks"
            :key="link.id"
        >
            <a
                :href="link.url"
                class="transition ease-in-out duration-500 opacity-50 hover:opacity-100"
                >
                <img
                    :src="link.src"
                    :alt="link.alt"
                >
            </a>


        </li>
    </ul>
</template>
