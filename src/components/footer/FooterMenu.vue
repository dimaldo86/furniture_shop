<script setup lang='ts'>
import { menuHeaderLinks, menuFooterCompanyLinks, menuFooterSaleLinks} from '@/ts/constants/menu'

</script>

<template>
    <div class="grid grid-cols-3">
        <div class="flex flex-col gap-3">
            <h3 class="text-white">Menu</h3>
            <ul class="flex flex-col gap-3">
                <li
                    class=""
                    v-for="saleLink in  menuFooterSaleLinks"
                    :key="saleLink.id"
                >
                    <a
                        class="text-white font-satoshi text-sm"
                        href="#"
                    >{{ saleLink.name }}</a>
                </li>
            </ul>
        </div>

         <div class="flex flex-col gap-3">
            <h3 class="text-white">Categories</h3>
            <ul class="flex flex-col gap-3">
                <li
                    class=""
                    v-for="link in  menuHeaderLinks"
                    :key="link.id"
                >
                    <a
                        class="text-white font-satoshi text-sm"
                        href="#"
                    >{{ link.name }}</a>
                </li>
            </ul>
        </div>

        <div class="flex flex-col gap-3">
            <h3 class="text-white">Our company</h3>
            <ul class="flex flex-col gap-3">
                <li
                    class=""
                    v-for="companyLink in  menuFooterCompanyLinks"
                    :key="companyLink.id"
                >
                    <a
                        class="text-white font-satoshi text-sm"
                        href="#"
                    >{{ companyLink.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

