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
    <div class="flex flex-col md:flex-row md:justify-between gap-[5rem] md:gap-[13rem]">
        <div class="flex flex-col gap-[1.5rem] md:w-1/2 md:items-start mr-auto">
          <h2 class="md:text-[5rem] text-[2rem] leading-[1] font-dm ">Banking <br class="hidden md:block" />
            starts here.</h2>
          <p class="md:text-[1.3rem] text-base font-dm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <div class="grid md:grid-cols-2 md:gap-4 gap-5">
            <div v-for="feature in features" :key="feature.id">
              <span class="flex items-center gap-[.5rem] md:text-[1.2rem] font-medium">
                <BaseIcon :name="feature.icon"/>
                {{ feature.text }}
              </span>
            </div>
            
          </div>
          <div class="flex flex-col  md:flex-row gap-[2rem] w-full md:w-auto">
            <button class="btn">Open Account</button>
            <button class="btn-neutral mx-auto md:mx-0">Compare Cards <span><BaseIcon name="right-arrow"/></span> </button>
          </div>
        </div>
        <div class="w-[60%] md:w-1/3 mx-auto">
          <img src="/images/cards.png" alt="Image description">
      </div>
      
    </div>
</template>

<style scoped>

</style>