<script setup lang='ts'>
export interface ILink {
    name:string,
    path:string,
    id:number | string
}
const menuLinks:ILink[] = [
    {
        name:'Plant pots',
        path:'/plant',
        id:1
    },
    {
        name:'Ceramics',
        path:'/ceramics',
        id:2
    },
    {
        name:'Tables',
        path:'/tables',
        id:3
    },
    {
        name:'Chairs',
        path:'/chairs',
        id:4
    },
    {
        name:'Crockery',
        path:'/crockery',
        id:5
    },
    {
        name:'Tableware',
        path:'/tableware',
        id:6
    },
    {
        name:'Cutlery',
        path:'/cutlery',
        id:7
    },

]

</script>

<template>
    <nav class="h-[62px] w-full">
        <ul class="w-full h-full flex items-center justify-center">
            <li
                v-for="link in menuLinks"
                :key="link.id"
                class="h-full  "
            >
                <a href="#" class="nav__link sans h-full px-[22px] flex items-center justify-center text-link hover:text-white hover:bg-main transition duration-500">
                    {{ link.name }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>

</style>