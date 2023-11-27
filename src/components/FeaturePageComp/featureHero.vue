<script setup>
import BaseIcon from "../BaseIcon.vue"
</script>

<template>
    <div class="bg-featurebg md:py-[rem]">
        <div >
            <div class="flex flex-col gap-[1rem] items-center justify-center py-[2rem]">
                <h5 class="text-[1.1rem] font-medium">Features</h5>
                <h2 class="text-[5rem] font-medium font-dm">All in one card.</h2>
                <p class="max-w-[25rem] text-[1rem] font-medium text-center">Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.</p>
                <div class="flex gap-[2rem]">
                <button class="btn">Open Account</button>
                <button class="btn-neutral">Compare Cards <span><BaseIcon name="right-arrow"/></span></button>
                </div>
            </div>
            <div class="overflow-x-hidden">
                <BaseIcon name="featured_cards" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>