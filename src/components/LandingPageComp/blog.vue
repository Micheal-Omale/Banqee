<script setup>
    import BaseIcon from '../BaseIcon.vue'

    const links = [{
            img: '/images/pic1.png',
            title: 'How To Start Using Banko For Your Startup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.',
            categories: [{
                cate1: 'Product',
                cate2: 'Technology'
            }],
            id: 1
        },
        {
            img: '/images/pic2.png',
            title: '10 Things Nobody Told You About Banko',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.',
            categories: [{
                cate1: 'Product',
                cate2: 'Technology'
            }],
            id: 2
        },
        {
            img: '/images/pic3.png',
            title: '7 Ways To Improve You Saving Habits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.',
            categories: [{
                cate1: 'Product',
                cate2: 'Technology'
            }],
            id: 3
        }
    ]
</script>

<template>
    <div class="py-[4.5rem]">
        <div class="flex flex-col gap-[2rem]">
            <div class="flex justify-between">
                <h2 class="md:text-[4rem] text-[2rem] font-dm font-medium">Blog</h2>
                <span class="flex items-center gap-[1rem] text-primary font-medium">All Articles
                    <BaseIcon name="right-arrow" /></span>
            </div>
            <div class="w-full grid md:grid-cols-3 md:gap-[1rem] gap-[3rem]">
                <div class="flex flex-col gap-[1.3rem]" v-for="link in links" :key="link.id">
                    <img class="rounded-[1rem]" :src="link.img" />
                    <div class="flex flex-col gap-[.8rem]">
                        <h2 class="text-[1.5rem] font-medium">{{ link.title }}</h2>
                        <p class="text-[1rem] font-medium font-dm">{{ link.description }}</p>
                    </div>
                    <div class="flex gap-[2rem]">
                        <span class="text-[1rem] font-medium bg-bordergray px-[1rem] py-[.3rem] rounded-[.3rem]">{{ link.categories[0].cate1 }}</span>
                        <span class="text-[1rem] font-medium bg-bordergray px-[1rem] py-[.3rem] rounded-[.3rem]">{{ link.categories[0].cate2 }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>