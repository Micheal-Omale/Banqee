<script setup>
import UiContainer from '../components/UiContainer.vue';
import blogData from '../assets/blogData.json'
import {useRouter} from 'vue-router'

const cate = ['All', 'Product', 'Technology', 'App']

const router = useRouter()

</script>

<template>
    <ui-container>
        <div>
        <div class="flex flex-col justify-center items-center md:py-[5rem]">
            <h2 class="text-[4rem] font-medium font-dm ">Blog</h2>
        </div>
       <div class="flex flex-col gap-[2rem]">
        <div class="flex flex-col gap-[1rem] items-start justify-start w-full">
            <div class="flex items-center justify-start gap-[2rem] flex-wrap w-full">
                <h2 class="text-[1.2rem] capitalize">categories</h2>
                <div class="flex items-center justify-start gap-4 flex-wrap">
                    <div v-for="item in cate" class="bg-drop px-4 py-1 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer select-none">
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full grid grid-cols-2 md:grid-cols-3 gap-[2rem] gap-y-[3rem]">
            <div @click="router.push(`/blog/${blog.id}`)" class="flex flex-col gap-[1.3rem] cursor-pointer" v-for="blog in blogData" :key="blog.id">
                <img class="rounded-[1rem]" :src="blog.img" />
                <div class="flex flex-col gap-[.8rem]">
                    <h2 class="md:text-[1.5rem] font-medium capitalize">{{ blog.title }}</h2>
                    <p class="md:text-[1rem] font-medium font-dm">{{ blog.description }}</p>
                </div>
                <div class="flex gap-[2rem] items-center">
                    <div  v-for="categories in blog.categories" >
                        <span class="text-[1rem] font-medium bg-bordergray px-[1rem] py-[.3rem] rounded-[.3rem]">{{ categories }}</span>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
</ui-container>
</template>

<style scoped>

</style>