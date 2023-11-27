<script setup>
const { compare } = defineProps(['compare']);
import BaseIcon from '../BaseIcon.vue';
</script>

<template>
    <div class="flex justify-between gap-[2rem]">
        <div class="flex justify-between gap-[10rem] items-center">
            <div class="flex items-center justify-center gap-[1.5rem]">
                <BaseIcon :name="compare.icon"/>
                <div class="flex flex-col gap-2">
                    <h5 class="capitalize font-medium text-[1.3rem]">{{ compare.title }}</h5>
                <p class="text-slate-400 text-[1rem]">{{ compare.description }}</p>
                </div>
            </div>
            <div>
                <ul class="flex justify-center items-center gap-[15rem]">
                    <li v-for="icon in compare.icons">
                        <BaseIcon :name="icon"/>
                    </li>
                    <li class="text-[1.2rem] font-medium font-dm capitalize" v-for="text in compare.text">
                        {{text }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>