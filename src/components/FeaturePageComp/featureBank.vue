<script setup>
import BaseIcon from '../BaseIcon.vue';

const items = [
    {
      title: 'Statistics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      img: "/images/featured_card1.png",
      id:1
    },
    {
      title: 'Cards',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.',
      img: "/images/featured_card2.png",
      id:2
    },
]


const icons = [
    {icon:'laptop', name:'New Laptop', price: '400$', id:1},
    {icon:'bike', name:'Dream Bike', price: '200$', id:2},
]
const logos = [{
            icon: 'webflow',
            id: 1
        },
        {
            icon: 'shopify',
            id: 2
        },
        {
            icon: 'zapier',
            id: 3
        },
        {
            icon: 'bitcoin',
            id: 4
        },
        {
            icon: 'paypal',
            id: 5
        },
        {
            icon: 'mastercard',
            id: 6
        },
        {
            icon: 'visa',
            id: 7
        },
        {
            icon: 'gpay',
            id: 8
        },
        {
            icon: 'applepay',
            id: 9
        },
        {
            icon: 'amazonpay',
            id: 10
        }
    ]

const links = [
    {icon:'apple', title: 'Apple', description:'Mackbook', cost:"-999€", id:1},
    {icon:'apple', title: 'amazon', description:'elctronics', cost:"-49€", id:2},
    {icon:'apple', title: 'twitter', description:'ads', cost:"-29€", id:3},
    {icon:'apple', title: 'microsoft', description:'office suite', cost:"-149€", id:4},
]
</script>

<template>
    <div class="py-[2.5rem]">
        <div class="flex flex-col gap-[5rem]">
            <div class="flex flex-col justify-center items-center gap-[1rem]">
                <h2 class="md:text-[4rem] text-[2rem] font-medium font-dm tracking-[-0.1rem]">All in one bank. Really.</h2>
                <p class="font-medium text-[1rem] md:text-[1.3rem] font-dm md:w-[50%] text-center">Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.</p>
            </div>
            <div class="grid md:grid-cols-2 gap-[5rem]">
                <div class="bg-drop pt-[3rem] rounded-[2rem] flex gap-[1.5rem] flex-col items-center justify-center overflow-hidden" v-for="link in items" :key="link.id">
                    <h2 class="text-[2rem] font-medium font-dm">{{ link.title }}</h2>
                    <p class="w-[60%] text-center pb-[1rem] font-medium">{{ link.description }}</p>
                    <img :src="link.img" />
               </div>
            </div>
           <div>
            <div>
                <div class="w-full flex flex-col md:flex-row items-center justify-between gap-6">
                  <div class="bg-drop w-full flex flex-col items-start justify-start gap-5 h-[500px] overflow-hidden rounded-[20px] pt-8 px-4">
                    <h2 class="text-[2.5rem] leading-[3rem] font-medium font-dm">Easy <br /> Integration</h2>
                    <p class="text-[1.2rem] text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   <div class="grid grid-cols-3 gap-[2rem]">
                    <div v-for="link in logos" :key="link.id">
                        <BaseIcon class="w-3" :name="link.icon"/>
                    </div>
                   </div>
                  </div>
                  <div class="bg-drop w-full flex flex-col items-start justify-start gap-5 h-[500px] overflow-hidden rounded-[20px] pt-8 px-4">
                    <h2 class="text-[2.5rem] leading-[3rem] font-medium font-dm">Savings <br /> account</h2>
                    <p class="text-[1.2rem] text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div class="flex gap-[1rem] flexwrap mx-auto">
                        <div v-for="link in icons" :key="link.id">
                            <BaseIcon :name="link.icon"/>
                            <h5 class="font-semibold">{{ link.name }}</h5>
                    <p class="text-slate-400 font-semibold">{{ link.price }}</p>
                        </div>
                    </div>
                  </div>
                  <div class="bg-drop w-full flex flex-col items-start justify-start gap-5 h-[500px] overflow-hidden rounded-[20px] pt-8 px-4">
                    <h2 class="text-[2.5rem] leading-[3rem] font-medium font-dm">Instant <br />transaction</h2>
                    <p class="text-[1.2rem] text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div class="flex flex-col gap-[1rem] flex-wrap">
                        <div class="bg-white w-[300px] flex items-center gap-[.8rem] py-[.6rem] px-[1rem] rounded-lg" v-for="link in links" :key="link.id">
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
              </div> 
        </div>
        </div>
    </div>
</template>

<style scoped>

</style>