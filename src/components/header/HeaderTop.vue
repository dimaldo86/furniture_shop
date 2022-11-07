<script setup lang='ts'>

</script>

<template>
    <div class="header__top w-full hidden md:flex items-center h-[60px] border-b border-solid">
        <div class="w-1/3 flex items-center h-full justify-start ">
            <img src="/assets/img/header/search.svg" alt="search" class="w-[16px] h-[16px]">
        </div>
        <router-link to="/" class="w-1/3 h-full flex items-center justify-center text-2xl text-title cursor-pointer hover:opacity-80">
            Avion
        </router-link>
        <div class="w-1/3 h-full flex items-center justify-end">
            <img src="/assets/img/header/cart.svg" alt="cart" class="w-[16px] h-[16px]">
            <img src="/assets/img/header/user.svg" alt="user" class="ml-4 w-[16px] h-[16px]">
        </div>
    </div>
</template>

