<script setup lang='ts'>
import  { menuHeaderLinks }  from '@/ts/constants/menu.ts'

</script>

<template>
    <nav class="h-[62px] w-full hidden md:flex">
        <ul class="w-full h-full flex items-center justify-center">
            <li
                v-for="link in menuHeaderLinks"
                :key="link.id"
                class="h-full  "
            >
                <a href="#" class="nav__link sans h-full px-[22px]  flex items-center justify-center text-link hover:text-white hover:bg-main transition duration-500">
                    {{ link.name }}
                </a>
            </li>
        </ul>
    </nav>
</template>
