<script setup>
import BaseIcon from "../BaseIcon.vue"
</script>

<template>
    <div class="bg-featurebg py-[4rem] md:py-0">
        <div >
            <div class="flex flex-col gap-[1rem] items-center justify-center md:py-[2rem]">
                <h5 class="text-[1.1rem] font-medium ">Features</h5>
                <h2 class="md:text-[5rem] text-[2rem] font-medium font-dm">All in one card.</h2>
                <p class="max-w-[25rem] text-[1rem] font-medium text-center">Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.</p>
                <div class="flex flex-col md:flex-row gap-[2rem]">
                <button class="btn w-[20rem] md:w-auto">Open Account</button>
                <button class="btn-neutral mx-auto md:mx-0">Compare Cards <span><BaseIcon name="right-arrow"/></span></button>
                </div>
            </div>
            <div class="overflow-x-hidden hidden md:block">
                <BaseIcon name="featured_cards" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>