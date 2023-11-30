<script setup>
 import BaseIcon from '../BaseIcon.vue';
 
 const marks = [
    {icon:'check', text: 'Malesuada Ipsum', id:1},
    {icon:'check', text: 'Vestibulum', id:2},
    {icon:'check', text: 'Parturient Lorem', id:3}
 ]
 const links = [
    {icon:'banko', title: 'Banko', description:'You payment of 49€ has been processed!',  id:1},
    {icon:'banko', title: 'Banko', description:'You got a new support message', id:2},
    {icon:'banko', title: 'Banko', description:'Your payment was declined!', id:3},
    {icon:'banko', title: 'Banko', description:'Pleas verify your payment of 99€!',  id:4},
    {icon:'banko', title: 'Banko', description:'New account statistic are available!', id:5},
 ]
</script>

<template>
    <div class="md:py-[4.5rem] py-[3rem]">
        <div class="flex md:flex-row flex-col justify-between gap-[5rem]">
          <div class=" flex flex-col gap-[1.1rem] md:w-1/2">
            <h5 class="md:text-[1.3rem] text-base capitalize tracking-[.1rem] font-dm font-medium">notifications</h5>
            <h4 class="md:text-[4rem] text-[2.3rem] font-dm font-medium tracking-[.1rem]">Stay notified</h4>
            <p class="font-dm font-medium md:text-[1.2rem]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div v-for="mark in marks" :key="mark.id">
                <span class="flex items-center gap-[1rem] md:text-[1.2rem] font-dm font-medium">
                    <BaseIcon :name="mark.icon"/>
                    {{ mark.text }}
                </span>
            </div>
            <a class="flex gap-[1.2rem] items-center text-primary md:text-[1.2rem] font-medium pt-[1rem]">Compare Cards
                <span> <BaseIcon name="right-arrow" /></span> </a>
          </div>
          <div class="flex flex-col gap-[1rem] mx-auto">
            <div class="bg-drop w-[430px] flex items-center gap-[.8rem] py-[.8rem] px-[1rem] rounded-[1rem]" v-for="link in links" :key="link.id">
                    <BaseIcon :name="link.icon"/>
                    <div>
                    <h5 class="capitalize font-dm font-bold">{{ link.title }}</h5>
                    <p class="capitalize text-[1rem] fon-dm font-medium">{{ link.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>