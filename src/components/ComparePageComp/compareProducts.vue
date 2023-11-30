<script setup>
import compareItems from './compareItems.vue';
import UiContainer from '../UiContainer.vue';

 const comparesX = [
  {
    icon: 'card',
    title: 'physical card',
    description: 'Diam in arcu cursus euismod',
        text:[ 'optional'],
        icons: ['check','check'],
    id: 1,
  },
  {
    icon: 'v-card',
    title: 'virtual card',
    description: 'Diam in arcu cursus euismod',
        text: ['-', 'upto 2','unlimited',] ,
    id: 2,
  },
  {
    icon: 'currency',
    title: 'contactless payment',
    description: 'Diam in arcu cursus euismod',
        icons: ['check','check','check',],
    id: 3,
  },
  {
    icon: 'wifi',
    title: 'mobile payments',
    description: 'Diam in arcu cursus euismod',
    icons:[
      'check','check','check',
    ],
    id: 3,
  },
];

 const comparesY = [
  {
    icon: 'globe',
    title: 'free payments worldwide',
    description: 'Diam in arcu cursus euismod',
        text:[ '-'],
        icons: ['check','check'],
    id: 1,
  },
  {
    icon: 'atm',
    title: 'free atm withdrawls',
    description: 'Diam in arcu cursus euismod',
        text: ['2', '5','10',] ,
    id: 2,
  },
  {
    icon: 'mobile',
    title: 'mobile banking',
    description: 'Diam in arcu cursus euismod',
        icons: ['check','check','check',],
    id: 3,
  },
];

const comparesZ = [
  {
    icon: 'savings',
    title: 'saving accounts',
    description: 'Diam in arcu cursus euismod',
        text: ['2', '5','unlimited',] ,
    id: 1,
  },
  {
    icon: 'chart',
    title: 'advanced statistics',
    description: 'Diam in arcu cursus euismod',
        icons: ['check','check','check',],
    id: 2,
  },
  {
    icon: 'diamond',
    title: 'premium partners offer',
    description: 'Diam in arcu cursus euismod',
    icons:[
      'check','check','check',
    ],
    id: 3,
  },
];

</script>

<template>
    <div>
       <ui-container>
        <div class="flex flex-col gap-[4rem]">
            <Compare class="flex flex-col gap-[2rem]">
                <h2 class="md:text-[2.5rem] text-[1.3rem] font-medium font-dm capitalize">Credit card</h2>
                <compareItems class="border-b py-5 " v-for="compare in comparesX" :key="compare.id" :compare="compare" />
            </Compare>
            <Compare class="flex flex-col gap-[2rem]">
                <h2 class="md:text-[2.5rem] text-[1.3rem] font-medium font-dm capitalize">Banking Account</h2>
                <compareItems class="border-b py-5 " v-for="compare in comparesY" :key="compare.id" :compare="compare" />
               </Compare>
            <Compare class="flex flex-col gap-[2rem]">
                <h2 class="md:text-[2.5rem] text-[1.3rem] font-medium font-dm capitalize">Extra Features</h2>
                <compareItems class="border-b py-5 " v-for="compare in comparesZ" :key="compare.id" :compare="compare" />
               </Compare>
        </div>
       </ui-container>
     </div>
</template>

<style scoped>

</style>