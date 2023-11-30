<script setup>
    import BaseIcon from '../BaseIcon.vue';

    const links = [{
            icon: 'star',
            title: 'Sunt qui esse pariatur duis deserunt mollit',
            text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
            user: [{
                name: 'Cody Fisher',
                job: 'Medical Assistant'
            }],
            id: 1
        },
        {
            icon: 'star',
            title: 'At lectus urna duis convallis tellus',
            text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
            user: [{
                name: 'Jenny Wilson',
                job: 'Medical Assistant'
            }],
            id: 2
        },
        {
            icon: 'star',
            title: 'Elit aute irure tempor cupidatat incididunt',
            text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
            user: [{
                name: 'Guy Hawkins',
                job: 'President of Sales'
            }],
            id: 3
        },
        {
            icon: 'star',
            title: 'Sunt qui esse pariatur duis deserunt mollit',
            text: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.',
            user: [{
                name: 'Cody Fisher',
                job: 'Medical Assistant'
            }],
            id: 4
        },
        {
            icon: 'star',
            title: 'Donec et fringilla neque',
            text: 'Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.',
            user: [{
                name: 'Darlene Robertson',
                job: 'Dog Trainer'
            }],
            id: 5
        },
        {
            icon: 'star',
            title: 'Etiam accumsan porta neque eros',
            text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.',
            user: [{
                name: 'Dianne Russell',
                job: 'Medical Assistant'
            }],
            id: 6
        },
    ]
</script>

<template>
    <div class="py-[4rem] flex flex-col gap-[5rem]">
        <div class="flex md:flex-row flex-col gap-[3rem] md:gap-[10rem]">
            <div class="flex flex-col  md:gap-[1rem]">
                <h5 class="md:text-[1.3rem] font-medium font-dm">Testimonial</h5>
                <h2 class="md:text-[4rem] text-[2rem] font-medium font-dm md:leading-[4.5rem]">People all over the <br class="hidden md:block" /> world use banko.
                </h2>
            </div>
            <div class="md:pt-[8rem]">
                <span class="flex items-center gap-[.5rem] text-[1rem] font-medium">
                    <BaseIcon name="rated_star" />
                    Rated <span class="text-primary">4.8/5</span>from 1000 users
                </span>
            </div>
        </div>
        <div class="grid md:grid-cols-3 gap-[2rem]">
            <div class="flex flex-col gap-[1.2rem] border border-bordergray rounded-lg py-[1.5rem] px-[2rem]" v-for="link in links" :key="link.id">
                <div class="flex">
                    <div v-for="index in 5" :key="index">
                        <BaseIcon :name="link.icon" />
                    </div>
                </div>
                <h2 class="text-[1.5rem] font-medium font-dm">{{link.title}}</h2>
                <p class="text-[1rem] font-medium font-dm">{{ link.text }}</p>
                <div>
                    <h4 class="font-medium">{{ link.user[0].name }}</h4>
                <h4>{{ link.user[0].job }}</h4>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>

</style>