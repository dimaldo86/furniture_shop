<script setup lang='ts'>
import  { socialLinks }  from '@/ts/constants/social'
</script>



<template>
    <ul class="flex items-center xs:justify-end">
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
                    class="max-w-full max-h-full object-cover"
                    :src="link.src"
                    :alt="link.name"
                >
            </a>


        </li>
    </ul>
</template>