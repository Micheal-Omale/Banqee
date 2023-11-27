<script setup>
    import {
        useRoute, useRouter
    } from 'vue-router'
    import {
        ref,
        onBeforeMount
    } from 'vue'
    import blogData from '../assets/blogData.json'

    const blog = ref(null)
    const route = useRoute()

    const {
        id
    } = route.params;

    onBeforeMount(() => {
        blog.value = blogData.find(b => b.id === parseInt(id))
    })
</script>

<template>
    <div class="px-[10rem] py-[5rem] flex flex-col justify-center items-center">
        <div>
            <div class="flex flex-col justify-center items-center gap-[2rem]">
                <div class="flex gap-[1rem]">
                    <div class="" v-for="categories in blog.categories">
                        <span
                            class="text-[1rem] text-primary font-medium bg-featurebg px-[1rem] py-[.3rem] rounded-[.3rem]">{{ categories }}</span>
                    </div>
                </div>
                <h2 class="text-[3.4rem] font-medium font-dm leading-[4rem] w-[50rem] text-center">{{ blog.title }}</h2>
                <p class="w-[40rem] text-[1.3rem] font-medium font-dm text-center">{{ blog.description }}</p>
                <img :src="blog.img" />
                <div class="flex flex-col justify-center items-start gap-[2rem] w-[40rem]">
                    <h5 class="font-medium text-[1.6rem]">Et malesuada fames ac turpis</h5>
                    <p class="font-medium font-dm text-[1.2rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Morbi blandit cursus
                        risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo odio. Et malesuada fames ac
                        turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci
                        a. Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus
                        viverra. <br />
                        Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus at ultrices mi tempus
                        imperdiet nulla. Cras sed felis eget velit aliquet sagittis. Amet commodo nulla facilisi nullam
                        vehicula ipsum a arcu cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at
                        augue. Blandit aliquam etiam erat velit scelerisque in dictum. In hac habitasse platea dictumst
                        vestibulum rhoncus. Molestie ac feugiat sed lectus vestibulum.
                    </p>
                    <h5 class="font-medium text-[1.6rem]">Nascetur ridiculus mus</h5>
                    <p class="font-medium font-dm text-[1.2rem]">
                        Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis orci a scelerisque purus semper
                        eget duis at. Porta lorem mollis aliquam ut porttitor leo a diam. In fermentum et sollicitudin
                        ac orci phasellus egestas tellus. Mauris cursus mattis molestie a iaculis at erat pellentesque
                        adipiscing. Nascetur ridiculus mus mauris vitae ultricies. Dui nunc mattis enim ut tellus. Duis
                        convallis convallis tellus id interdum. Quis ipsum suspendisse ultrices gravida dictum fusce.
                        Scelerisque mauris pellentesque pulvinar pellentesque. Tincidunt augue interdum velit euismod.
                        Nibh tortor id aliquet lectus. Amet commodo nulla facilisi nullam. Vulputate ut pharetra sit
                        amet aliquam id diam maecenas. Tellus pellentesque eu tincidunt tortor. Ultrices vitae auctor eu
                        augue ut lectus arcu bibendum.
                    </p>
                </div>
            </div>

            <div class="py-[4rem]">
                <div class="w-full grid grid-cols-3 gap-[2rem] gap-y-[3rem]">
                    <div class="flex flex-col gap-[1.3rem] cursor-pointer" v-for="blog in blogData.slice(0, 3)" :key="blog.id">
                        <img class="rounded-[1rem]" :src="blog.img" />
                        <div class="flex flex-col gap-[.8rem]">
                            <p class="text-[1rem] font-medium font-dm">{{ blog.description }}</p>
                        </div>
                        <div class="flex gap-[2rem] items-center">
                            <div  v-for="categories in blog.categories" >
                                <span class="text-[1rem] font-medium bg-bordergray px-[1rem] py-[.3rem] rounded-[.3rem]">{{ categories }}</span>
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