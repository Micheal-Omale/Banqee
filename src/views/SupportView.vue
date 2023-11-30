<script setup>
import { RouterLink } from "vue-router";
import UiContainer from "../components/UiContainer.vue";
import BaseIcon from '../components/BaseIcon.vue';
import cta from '../components/ComparePageComp/compareCTA.vue';
import supportFaq from '../components/SupportPageComp/supportFaq.vue';
</script>
<template>
    <div class="flex flex-col gap-[4rem] overflow-hidden">
        <div class="bg-featurebg pt-[5rem] flex flex-col md:flex-row justify-between px-[4rem] md:px-[8rem]">
            <div class="flex flex-col gap-[1rem]">
                <h5 class="text-[1.3rem] font-medium capitalize">support</h5>
                <h2 class="md:text-[5rem] text-[2rem] font-medium font-dm leading-[5.4rem]">How can<br class="hidden md:block"/> we help you?</h2>
            </div>
            <div>
                <BaseIcon name="supportApp"/>
            </div>
        </div>

            <div>
                <cta />
            </div>
    
        <ui-container>
            <div class="flex flex-col md:flex-row gap-[4rem] justify-between w-full py-[4.5rem]">
                <div class="bg-drop rounded-lg md:w-[30%] flex flex-col gap-[1.5rem] items-start justify-start h-[0%] pb-[3rem] px-[2rem]">
                    <h2 class="text-[1.5rem] font-medium capitalize font-dm pt-5">categories</h2>
                    <ul class="capitalize flex flex-col gap-[1rem]">
                        <li class="text-[1.3rem] text-[#1A191E80] font-medium font-dm">
                            <router-link to="#cards">cards</router-link>
                        </li>
                        <li class="text-[1.3rem] text-[#1A191E80] font-medium font-dm">
                            <router-link to="#account">account</router-link>
                        </li>
                        <li class="text-[1.3rem] text-[#1A191E80] font-medium font-dm">
                            <router-link to="#details">personal details</router-link>
                        </li>
                    </ul>
                </div>
                <div class="w-full">
                    <supportFaq />
                 </div>
            </div>
        </ui-container>
    </div>
</template>

<style scoped>

</style>