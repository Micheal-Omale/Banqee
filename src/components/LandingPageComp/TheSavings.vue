<script setup>
 import BaseIcon from '../BaseIcon.vue';

 const links = [
    {icon:'laptop', name:'New Laptop', price: '400$', id:1},
    {icon:'bike', name:'Dream Bike', price: '200$', id:2},
    {icon:'plane', name:'Holiday', price: '14000$', id:3},
    {icon:'camera', name:'Camera', price: '100$', id:4},
    {icon:'colored_plus', id:5}
 ]
</script>

<template>
    <div class="md:py-[4.5rem]">
        <div class="flex flex-col gap-[1.5rem] ">
            <h5 class="text-[1.3rem] capitalize font-dm font-medium">savings account</h5>
            <h2 class="text-[3rem] font-dm font-medium leading-[1]">Organize your <br/> money the right way</h2>
            <div class="flex justify-between">
                <p class="w-1/2 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button class="btn-neutral">All Features <BaseIcon name="right-arrow"/></button>
            </div>
            <div class=" flex gap-[2rem]">
                <div class="flex flex-col gap-[.5rem]" v-for="link in links" :key="link.id">
                    <BaseIcon :name="link.icon"/>
                    <h5 class="font-semibold">{{ link.name }}</h5>
                    <p class="text-slate-400 font-semibold">{{ link.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>