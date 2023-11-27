<script setup>
    import BaseIcon from '../BaseIcon.vue';
    const items = [{
            header: 'Transactions',
            title: 'Send & receive money instantly',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            icon: 'check',
            text: ['Malesuada Ipsum', 'Vestibulum', 'Parturient Lorem'],
            img: '/images/app.png',
            id: 1
        },
        {
            header: 'Cards',
            title: 'Manage your cards',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            icon: 'check',
            text: ['Malesuada Ipsum', 'Vestibulum', 'Parturient Lorem'],
            img: '/images/featured_app2.png',
            id: 2
        },
        {
            header: 'Advanced Statistics',
            title: 'Keep control over your money',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            icon: 'check',
            text: ['Malesuada Ipsum', 'Vestibulum', 'Parturient Lorem'],
            img: '/images/featured_app3.png',
            id: 3
        },
        {
            header: 'Saving Accounts',
            title: 'Lorem et ipsum dolor',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            icon: 'check',
            text: ['Malesuada Ipsum', 'Vestibulum', 'Parturient Lorem'],
            img: '/images/featured_app4.png',
            id: 4
        },
    ]
</script>

<template>
    <div class="py-[10rem]">
        <div class="flex flex-col gap-[10rem]">
            <div class="flex gap-[5rem]" v-for="link in items"  :key="link.id">
                <div class="flex flex-col gap-[2rem] w-1/2">
                    <h5 class="text-[1.2rem] font-medium font-dm">{{ link.header }}</h5>
                    <h2 class="text-[4rem] font-medium font-dm leading-[1]">{{ link.title }}</h2>
                    <p class="text-[1rem] font-medium font-dm">{{ link.description }}</p>
                    <div class="flex flex-col gap-[1rem]">
                        <ul v-for="item in link.text">
                            <li class="flex gap-[1rem] font-medium text-[1.1rem]">
                                <BaseIcon :name="link.icon" /> <span>{{item}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-[28%]">
                    <img :src="link.img" />
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>

</style>