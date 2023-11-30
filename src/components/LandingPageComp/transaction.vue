<script setup>
 import BaseIcon from '../BaseIcon.vue';
 
 const marks = [
    {icon:'colored_check', text: 'Malesuada Ipsum', id:1},
    {icon:'colored_check', text: 'Vestibulum', id:2},
    {icon:'colored_check', text: 'Parturient Lorem', id:3}
 ]
 const links = [
    {icon:'apple', title: 'Apple', description:'Mackbook', cost:"-999€", id:1},
    {icon:'apple', title: 'amazon', description:'elctronics', cost:"-49€", id:2},
    {icon:'apple', title: 'twitter', description:'ads', cost:"-29€", id:3},
    {icon:'apple', title: 'microsoft', description:'office suite', cost:"-149€", id:4},
    {icon:'apple', title: 'dropbox', description:'cloud', cost:"-14€", id:5},
    {icon:'apple', title: 'paypal', description:'Shopping', cost:"-200€", id:6},
 ]
</script>

<template>
    <div class="bg-featurebg md:py-[4.5rem] md:px-[9rem] py-[1.5rem] px-[1.5rem]">
        <div class="flex flex-col md:flex-row md:gap-[10rem]">
          <div class=" flex flex-col gap-[1.1rem] md:w-1/2 mr-auto py-[3.5rem]">
            <h4 class="md:text-[4rem] text-[2rem] font-dm font-medium leading-[71px]">Send & recieve <br class="hidden md:block"/> money instantly</h4>
            <p class="font-dm text-[1.3rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
            <div v-for="mark in marks" :key="mark.id">
                <span class="flex items-center gap-[1rem] text-[1.2rem] font-dm font-medium">
                    <BaseIcon :name="mark.icon"/>
                    {{ mark.text }}
                </span>
            </div>
          </div>
          <div class="md:w-1/2 flex flex-col gap-[1rem] mx-auto">
            <div class="bg-white w-[400px] flex items-center gap-[.8rem] py-[.6rem] px-[1rem] rounded-lg" v-for="link in links" :key="link.id">
                    <BaseIcon :name="link.icon"/>
                    <div>
                    <h5 class="capitalize font-dm font-semibold">{{ link.title }}</h5>
                    <p class="text-slate-400 capitalize text-[1rem] font-medium">{{ link.description }}</p>
                    </div>
                    <p class="text-end ml-auto text-[1.2rem]">{{ link.cost }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>