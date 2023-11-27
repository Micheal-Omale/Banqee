<script setup>
import { ref } from 'vue'
import BaseIcon from '../BaseIcon.vue';
import accordionItems from '../accordionItems.vue';
const links = [
    {icon: 'phone', text: '+49 176 123 456', description: 'Support Hotline', id:1},
    {icon: 'inbox', text: 'help@banquee.com', description: 'Support Email', id:2}
]

const faqs = ref([
    {
        question: 'How do i open an Banko account?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:1,
    },
    {
        question: 'How do i order a new Card?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:2,
    },
    {
        question: 'How to change my account limits?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:3,
    },
    {
        question: 'How does Banko premium?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:4,
    },
    {
        question: 'Can i have two Banko accounts?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:5,
    }
])

const accordion = (itemId)=>{
    faqs.value.forEach((faq) => {
    if (faq.id === itemId) {
       faq.open =! faq.open
    } else {
        faq.open = false
    }
  })
}
</script>

<template>
    <div class="py-[4.5rem]">
        <div class="flex gap-[10rem]">
            <div class="flex flex-col gap-[1.8rem]">
                <h2 class="text-[4rem] font-dm font-medium">Need help?</h2>
                <div class="flex items-center gap-[1.3rem]" v-for="link in links" :key="link.id">
                    <BaseIcon :name="link.icon"/>
                    <div>
                        <h5 class="text-[1.3rem] font-dm font-medium">{{ link.text }}</h5>
                        <p class="text-slate-400 font-dm ">{{ link.description }}</p>
                    </div>
                </div>
                <div class="">
                    <button class="btn-neutral">Support <span><BaseIcon name="right-arrow"/></span> </button>
                </div>
            </div>
            <div class="w-1/2">
                <accordionItems v-for="faq in faqs" :key="faq.id" :accordion="faq" @click="accordion(faq.id)" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>