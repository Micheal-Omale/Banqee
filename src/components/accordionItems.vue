<script setup>
    const {accordion} = defineProps(['accordion'])
    import BaseIcon from './BaseIcon.vue';

    const start = (element) => {
        element.style.height = element.scrollHeight + 'px'
    }
    const end = (element) => {
        element.style.height = ''
    }
</script>

<template>
    <div>
        <div class="border-bordergray border-b py-4">
            <button class="w-full flex items-center justify-between gap-3" @click="accordion(accordion.id)">
                <h2 class="md:text-[1.5rem] text-[1.2rem] font-medium font-dm">{{ accordion.question }}</h2>
                <span :class="{ 'rotate-45 transition-all duration-300': accordion.open }" class=" flex text-end transition-all">
                    <BaseIcon :name="accordion.icon" />
                </span>
            </button>
            <transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
                <div class="" v-if="accordion.open">
                    <p class="font-medium text-[1rem] py-[1rem]">{{ accordion.answer }}</p>
                </div>
            </transition>
        </div>
    </div>
</template>


<style scoped>

</style>