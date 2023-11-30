<script setup>
    import BaseIcon from './BaseIcon.vue';

    const items = [{
            title: 'About',
            links: ['features', 'Pricing', 'Support'],
            id: 1
        },
        {
            title: 'Blog',
            links: ['Products', 'Technology', 'Crypto'],
            id: 2
        },
        {
            title: 'Webflow',
            links: ['Styleguide', 'Licensing', 'changelog'],
            id: 3
        },
        {
            title: 'Social Media',
            links: ['Twitter', 'Facebook', 'Instagram'],
            id: 3
        }
    ]
</script>

<template>
    <div class="md:px-[5.5rem] px-[1rem]  md:py-[1.5rem]">
        <div class="flex flex-col md:flex-row md:gap-[15rem] gap-[5rem] w-full border-y-[1px] py-[2.5rem]">
            <div>
                <BaseIcon name="logo" />
            </div>
            <div class="grid md:grid-cols-4 grid-cols-2 md:gap-[8rem] gap-[4rem]">
                <div class="flex flex-col gap-[1rem]" v-for="item in items" :key="item.id">
                    <h2 class="text-[1.2rem] font-medium font-dm">{{ item.title }}</h2>
                    <ul class="flex flex-col gap-[1rem]">
                        <li class="text-[#1A191E80] font-medium text-[1rem] capitalize" v-for="link in item.links">
                            {{ link }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center pt-[1rem]">
            <p class="text-[1rem] font-thin">© Made by<span class="text-primary font-medium"> Mike</span> - Powered by <span class="text-primary font-medium">Vuejs</span></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>