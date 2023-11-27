<script setup>
import BaseIcon from '../BaseIcon.vue';
 const features = [
  {icon: 'light', text: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.', title: 'Instant Transfer', id: 1},
  {icon: 'savings', text: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.', title: 'Savings account ', id: 2},
  {icon: 'mobile', text: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.', title: 'Payments worldwide', id: 3},
  {icon: 'chart', text: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.', title: '100% mobile banking', id: 4},
  {icon: 'card', text: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.', title: 'Virtual cards', id: 5},
  {icon: 'wifi', text: 'Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.', title: 'Contactless payment', id: 6}
]
</script>

<template>
    <div class="py-[7rem] flex justify-between">
        <div class="flex flex-col gap-[2rem] w-1/2">
            <h2 class="font-dm text-[4rem] leading-[1] font-medium">One app. <br /> One Banking.</h2>
            <div class="grid grid-rows-3 grid-cols-2 gap-[1rem]" >
                <div class=" flex flex-col gap-[.5rem] py-[1.5rem] px-[1rem] border border-bordergray rounded-[16px]" v-for="feature in features" :key="feature.id">
                    <span><BaseIcon :name="feature.icon"/></span>
                    <h6 class="font-dm font-semibold">{{ feature.title }}</h6>
                    <p class="font-dm font-medium">{{ feature.text }}</p>
                </div>
            </div>
        </div>
        <div class="w-[28%]">
            <img src="/images/app.png">
        </div>
    </div>
</template>

<style scoped>

</style>