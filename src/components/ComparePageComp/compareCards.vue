<script setup>
import BaseIcon from '../BaseIcon.vue';
const cards =[
    {
        title:'Basic',
        highlight: 'popular',
        heading: 'free',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        card: 'compareFree',
        button: 'Get Started',
        id:1
    },
    {
        title:'Premium',
        heading: '$5',
        rate:"per month",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        card: 'comparePremium',
        button: 'Get Started',
        id:2
    },
    {
        title:'Gold',
        heading: '$10',
        rate:"per month",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        card: 'compareGold',
        button: 'Get Started',
        id:3
    },
]

</script>

<template>
    <div>
        <div class="flex gap-[2rem] w-[45%] relative left-[24%] py-[5rem]">
            <div v-for="card in cards" :key="card.id">
                <div class="flex flex-col justify-center items-center">
                    <h5 class="text-[1.5rem] font-medium font-dm">{{ card.title }} <span v-if="card.highlight === 'popular'" class="text-[1.2rem] text-primary bg-[#E8F2EE] py-[0.3rem] px-3 rounded-lg font-medium capitalize">{{ card.highlight }}</span></h5>
                    <div class="flex">
                        <h1 class="text-[2rem] font-medium capitalize">{{ card.heading }}</h1>
                        <p class="text-[1rem] pt-[2rem] font-medium text-slate-400">{{ card.rate }}</p>
                    </div>
                    <p class="text-[1.2rem] text-center text-slate-400">{{ card.description }}</p>
                    <div class="flex flex-col gap-[1rem]">
                        <BaseIcon :name="card.card" />
                         <button class="bg-primary text-white py-[0.5rem] rounded-lg">{{ card.button }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>