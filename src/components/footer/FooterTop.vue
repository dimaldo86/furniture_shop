<script setup lang='ts'>
import { menuHeaderLinks, menuFooterCompanyLinks, menuFooterSaleLinks} from '@/ts/constants/menu'

</script>

<template>
    <div class="grid md:grid-cols-4 grid-cols-2 gap-3 sm:py-12 py-6 border-b border-b-border">
         <div class="flex flex-col gap-3">
            <a href="#" class="text-white md:text-4xl md:leading-7 cursor-pointer transition ease-in-out duration-500 opacity-50 hover:opacity-100 text-3xl leading-7">Avion</a>
            <ul class="flex flex-col gap-3 text-white font-satoshi text-sm">
                <li class="">21 New York Street</li>
                <li class="">New York City</li>
                <li class="">United States of America</li>
                <li class="">432 34</li>
            </ul>
        </div>

        <div class="flex flex-col gap-3">
            <h3 class="text-white text-lg">Menu</h3>
            <ul class="flex flex-col gap-3">
                <li
                    class=""
                    v-for="saleLink in  menuFooterSaleLinks"
                    :key="saleLink.id"
                >
                    <a
                        class="link text-white pb-1 font-satoshi text-sm berore:transition before:duration-700 befpre:ease-in-out relative before:absolute before:content-[''] before:bottom-0 before:right-0 before:w-0 before:h-px before:bg-white"
                        href="#"
                    >{{ saleLink.name }}</a>
                </li>
            </ul>
        </div>

         <div class="flex flex-col gap-3">
            <h3 class="text-white text-lg">Categories</h3>
            <ul class="flex flex-col gap-3">
                <li
                    class=""
                    v-for="link in  menuHeaderLinks"
                    :key="link.id"
                >
                    <a
                        class="link text-white pb-1 font-satoshi text-sm berore:transition before:duration-700 befpre:ease-in-out relative before:absolute before:content-[''] before:bottom-0 before:right-0 before:w-0 before:h-px before:bg-white"
                        href="#"
                    >{{ link.name }}</a>
                </li>
            </ul>
        </div>

        <div class="flex flex-col gap-3">
            <h3 class="text-white text-lg">Our company</h3>
            <ul class="flex flex-col gap-3">
                <li
                    class=""
                    v-for="companyLink in  menuFooterCompanyLinks"
                    :key="companyLink.id"
                >
                    <a
                       class="link text-white pb-1 font-satoshi text-sm berore:transition before:duration-700 befpre:ease-in-out relative before:absolute before:content-[''] before:bottom-0 before:right-0 before:w-0 before:h-px before:bg-white"
                        href="#"
                    >{{ companyLink.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style  scoped>
@media (hover: hover) and (pointer: fine) {
  .link:hover::before{
    left: 0;
    right: auto;
    width: 100%;
  }
}

</style>
