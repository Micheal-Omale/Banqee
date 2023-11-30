<script setup>
import BaseIcon from '../BaseIcon.vue';
</script>

<template>
    <div class="md:px-[8rem] px-[2rem]">
        <div class="bg-primary rounded-lg flex flex-col md:flex-row md:justify-between md:items-center gap-[1rem] py-[2rem] px-[2rem]">
            <div>
                <h2 class="text-white text-[2.5rem] font-medium">Still have questions?</h2>
                <p class="text-[1.3rem] text-slate-200">We are here to help</p>
            </div>
            <div class="flex gap-[1.5rem]" >
                <BaseIcon name="phone"/>
                <div>
                    <h2 class="text-white text-[1.2rem] font-medium">+49 176 123 456</h2>
                <p class="text-slate-200">Support Hotlines</p>
                </div>
            </div>
            <div class="flex gap-[1.5rem]">
                <BaseIcon name="inbox"/>
                <div>
                    <h2 class="text-white text-[1.2rem] font-medium">help@bank.com</h2>
                <p class="text-slate-200">Support Email</p>
                </div>
            </div>
            <div>
                <div class="bg-black py-[1rem] px-[1.5rem] rounded-lg">
                    <h2 class="text-white font-medium">Chat with us</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>