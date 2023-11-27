<script setup>
    import BaseIcon from '../BaseIcon.vue';
    const features = [{
            icon: 'check',
            text: 'Instant Transfer',
            id: 1
        },
        {
            icon: 'check',
            text: 'Savings account ',
            id: 2
        },
        {
            icon: 'check',
            text: 'Payments worldwide',
            id: 3
        },
        {
            icon: 'check',
            text: '100% mobile banking',
            id: 4
        },
    ]
</script>

<template>
    <div class="pt-[2.5rem] bg-primary rounded-[2rem]">
        <div class="px-[2.5rem] pt-[2rem] flex justify-between">
            <div class="flex flex-col w-[50%] gap-[1.5rem]">
                <h2 class="text-[3.5rem] font-medium font-dm text-white leading-[1.2]">One app. <br /> One Banking</h2>
                <p class="text-white text-[1.1rem] font-dm font-medium"> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div class="grid grid-cols-2 gap-[1rem]">
                    <div v-for="link in features" :key="link.id">
                        <span class="text-white text-[1.1rem] font-dm font-medium flex gap-[.5rem]">
                            <BaseIcon :name="link.icon" />
                            {{ link.text }}
                        </span>
                    </div>
                </div>
                <div class="flex gap-[1.3rem]">
                    <a>
                        <BaseIcon name="applestore"/>
                    </a>
                    <a>
                        <BaseIcon name="google"/>
                    </a>
                </div>
            </div>
            <div class="h-[20%]">
                <BaseIcon name="app"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>