<script setup lang='ts'>
import { ref } from 'vue'
import { menuHeaderLinks } from '@/ts/constants/menu.ts'


const isOpenMenu = ref(false)

const showMenu = ():boolean => isOpenMenu.value = !isOpenMenu.value

</script>

<template>
<div class=" "></div>
   <nav class="w-full h-[50px] md:hidden flex  items-center justify-between relative">

       <a href="#" class=" w-1/4 h-full flex items-center justify-start text-2xl text-title cursor-pointer hover:opacity-80">
            Avion
      </a>
      <div class="w-3/4 flex items-center justify-end gap-8">
         <div class="flex w-3/4 items-center h-full justify-end ">
            <img src="/assets/img/header/search.svg" alt="search" class="w-[16px] h-[16px]">
        </div>
         <button
            @click="showMenu"
            class="w-6 h-4 flex flex-col justify-center items-start gap-1 relative ">
            <span
               class="w-full h-[2px] bg-title absolute top-0"

            ></span>
            <span class="w-4 h-[2px] bg-title  "></span>
            <span
                  class="w-full h-[2px] bg-title absolute bottom-0"

               ></span>
         </button>
      </div>

       <transition enter-active-class="duration-500 ease-out" enter-from-class="opacity-0  translate-x-[200px]" enter-to-class="opacity-100 translate-x-[0px]" leave-active-class="duration-800 ease-in" leave-from-class="opacity-100 translate-x-[0px]" leave-to-class="opacity-0 duration-800 translate-x-[200px]">

      <ul
         v-show="isOpenMenu"
         class="sm:w-1/2 w-[350px] bg-lightGray h-screen flex flex-col items-center justify-center absolute right-[-30px] top-0  transition duration-800 ease-out  z-50 ">
         <li>
            <button
            @click="showMenu"
            class="w-6 h-4 flex flex-col justify-center items-start gap-1 absolute top-[18px] left-[-28px]">
            <span
               class="w-full h-[2px] bg-title absolute"
               :class="[open ? 'bg-gray-200' : '-translate-y-1/2 top-1/2 rotate-45']"
            ></span>
            <span class="w-4 h-[2px] bg-title opacity-0 "></span>
            <span
                  class="w-full h-[2px] bg-title absolute bottom-0"
                  :class="[open ? 'bg-gray-300' : '-translate-y-1/2 top-1/2 -rotate-45']"
               ></span>
         </button>
         </li>
         <li
               v-for="link in menuHeaderLinks"
               :key="link.id"
               class="h-full w-full"
         >
            <a href="#" class="nav__link sans h-full w-full  flex items-center justify-center text-link hover:text-white hover:bg-main transition duration-500">
               {{ link.name }}
            </a>
         </li>
      </ul>
       </transition>

   </nav>


</template>