<script setup>
import { RouterLink } from "vue-router";
import BaseIcon from './BaseIcon.vue';
    const Links = [
        {
           text: "features",
           href: "/feature"
        },
        {
            text:"compare",
            href: "/compare"
        },
        {
            text: "support",
            href: "/support"
        },
        {
            text: "blog",
            href : "/blog"
        },
    ]

</script>

<template>
    <header class="bg-white w-full sticky top-0 md:px-[5.5rem]  md:py-[1.5rem] z-[51]">
        <nav class="flex justify-between items-center">
                <div>
                   <router-link to="/">
                    <BaseIcon name="logo" />
                   </router-link>
                </div>
                <ul class="hidden md:flex items-center gap-[1rem]">
                    <router-link active-class="bg-drop px-[1rem] py-[.4rem] rounded-md" class=" text-[1rem] capitalize font-medium cursor-pointer hover:bg-drop px-[1rem] py-[.4rem] rounded-md" v-for="link in Links" :key="text" :to="link.href">
                        {{ link.text }}
                    </router-link>
                </ul>
                <div class="md:flex gap-[2.4rem] items-center hidden">
                    <a class="text-primary font-medium">Login</a>
                    <button class="btn">Open Account</button>
                </div>
                
        </nav>
    </header>
</template>

<style scoped>

</style>