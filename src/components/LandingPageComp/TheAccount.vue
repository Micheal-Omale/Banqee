<script setup>
import BaseIcon from '../BaseIcon.vue';
</script>

<template>
    <div class="md:py-[4.5rem]">
        <div class="flex flex-col gap-[3.4rem] justify-center items-center ">
            <div class="flex flex-col gap-[1rem] text-center">
              <h5 class="text-[1.3rem] font-medium font-dm">Account</h5>
              <h2 class="text-[4rem] font-medium font-dm leading-[4.5rem]">Perfect Card <br /> for your needs.</h2>
              <p class="text-[1.3rem] font-medium font-dm px-[15rem]">Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.</p>
            </div>
            <div>
                <BaseIcon name="three_cards"/>
            </div>
            <div class="flex gap-[2rem]">
                <button class="btn">Open Account</button>
                <button class="hover:btn px-[1rem] py-[.5rem] text-primary font-medium rounded-lg border">Change Cards</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>