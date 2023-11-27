<script setup>
import BaseIcon from '../BaseIcon.vue';
const cards =[
    {
        title:'Basic',
        highlight: 'popular',
        heading: 'free',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        card: 'freeCard',
        button: 'Get Started',
        id:1
    },
    {
        title:'Gold',
        heading: '$5',
        rate:"per month",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        card: 'goldCard',
        button: 'Get Started',
        id:2
    },
    {
        title:'Premium',
        heading: '$10',
        rate:"per month",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        card: 'premiumCard',
        button: 'Get Started',
        id:3
    },
]
</script>

<template>
    <div class="py-[2.5rem]">
        <div class="flex flex-col gap-[5rem]">
            <div class="flex flex-col justify-center items-center">
                <h5 class="capitalize text-[1.4rem] font-medium font-dm">account</h5>
                <h2 class="text-[4rem] font-medium font-dm">Choose your card.</h2>
                <p class="text-center font-medium font-dm text-[1.3rem] w-[45%]">Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.</p>
            </div>
            <div class="flex justify-between gap-[2rem]">
                <div v-for="card in cards" :key="card.id">
                    <div class="flex flex-col justify-center items-center gap-[0.5rem]">
                        <h5 class="text-[2.2rem] font-medium font-dm">{{ card.title }} <span v-if="card.highlight === 'popular'" class="text-[1.2rem] text-primary bg-[#E8F2EE] py-[0.3rem] px-3 rounded-lg font-medium capitalize">{{ card.highlight }}</span></h5>
                        <div class="flex">
                            <h1 class="text-[4rem] font-medium capitalize">{{ card.heading }}</h1>
                            <p class="text-[1.3rem] pt-[3rem] font-medium text-slate-400">{{ card.rate }}</p>
                        </div>
                        <p class="text-[1.2rem] w-[80%] text-center text-slate-400">{{ card.description }}</p>
                        <div class="w-full flex flex-col gap-[1rem]">
                            <BaseIcon :name="card.card" />
                            <button class="bg-primary text-white py-[0.5rem] rounded-lg">{{ card.button }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>