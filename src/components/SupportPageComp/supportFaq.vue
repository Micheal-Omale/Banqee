<script setup>
 import { ref } from 'vue'
 import accordionItems from '../accordionItems.vue';
 import BaseIcon from '../BaseIcon.vue';
const faqX = ref([
    {
        question: 'How to setup my card?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:1,
    },
    {
        question: 'How do I create a virtual card?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:2,
    },
    {
        question: 'How to order an extra card?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:3,
    },
    {
        question: 'My card will exprise soon. What to do?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:4,
    },
    {
        question: 'How do I freeze my card?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:5,
    }
])

const faqY = ref([
    {
        question: 'How do I verify my account?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:1,
    },
    {
        question: 'Can I have multiple accounts?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:2,
    },
    {
        question: 'How to upgrade my account?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:3,
    },
    {
        question: 'How do I cancel my account?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:4,
    }
])

const faqZ = ref([
    {
        question: 'How do I change my account address?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:1,
    },
    {
        question: 'How to close my account?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:2,
    },
    {
        question: 'Where do I find my tax ID?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:4,
    },
    {
        question: 'How can I download my bank documents?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.',
        icon: 'plus',
        open: false,
        id:5,
    }
])

const toggleAccordion = (array, itemId) => {
    array.forEach((faq) => {
       if (faq.id === itemId) {
        faq.open = !faq.open
       } else {
        faq.open = false
       }
    });
}

</script>
<template>
    <div class="flex flex-col gap-[3rem]">
        <div id="card">
            <div class="flex gap-[.5rem] pb-[1.2rem]">
                <BaseIcon name="supportIcon"/>
                <h2 class="text-[2rem] font-medium font-dm">Cards</h2>
            </div>
            <accordionItems v-for="faq in faqX" :key="faq.id" :accordion="faq" @click="() => toggleAccordion(faqX, faq.id)" /> 
        </div>
        <div id="account">
            <div class="flex gap-[.5rem] pb-[1.2rem]">
                <BaseIcon name="supportIcon"/>
                <h2 class="text-[2rem] font-medium font-dm">Accounts</h2>
            </div>
            <accordionItems v-for="faq in faqX" :key="faq.id" :accordion="faq" @click="() => toggleAccordion(faqX, faq.id)" /> 
        </div>
        <div id="details">
            <div class="flex gap-[.5rem] pb-[1.2rem]">
                <BaseIcon name="supportIcon"/>
                <h2 class="text-[2rem] font-medium font-dm">Personal Details</h2>
            </div>
            <accordionItems v-for="faq in faqX" :key="faq.id" :accordion="faq" @click="() => toggleAccordion(faqX, faq.id)" /> 
        </div>
    </div>
</template>

<style scoped>

</style>