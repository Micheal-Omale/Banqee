<script setup>
import BaseIcon from '../BaseIcon.vue';
 const features = [
  {icon: 'check', text: 'Instant Transfer', id: 1},
  {icon: 'check', text: 'Savings account ', id: 2},
  {icon: 'check', text: 'Payments worldwide', id: 3},
  {icon: 'check', text: '100% mobile banking', id: 4},
]
</script>

<template>
    <div class="flex justify-between gap-[13rem]">
        <div class="flex flex-col gap-[1.5rem] w-1/2 items-start mr-auto">
          <h2 class="text-[5rem] leading-[1] font-dm ">Banking <br class="hidden md:block" />
            starts here.</h2>
          <p class="text-[1.3rem] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="feature in features" :key="feature.id">
              <span class="flex items-center gap-[.5rem] text-[1.2rem] font-medium">
                <BaseIcon :name="feature.icon"/>
                {{ feature.text }}
              </span>
            </div>
            
          </div>
          <div class="flex gap-[2rem]">
            <button class="btn">Open Account</button>
            <button class="btn-neutral">Compare Cards <span><BaseIcon name="right-arrow"/></span> </button>
          </div>
        </div>
        <div class="">
          <img src="/images/cards.png">
        </div>
    </div>
</template>

<style scoped>

</style>