<script setup>
import { RouterLink } from "vue-router";
import UiContainer from "../components/UiContainer.vue";
import BaseIcon from '../components/BaseIcon.vue';
import cta from '../components/ComparePageComp/compareCTA.vue';
import supportFaq from '../components/SupportPageComp/supportFaq.vue';
</script>
<template>
    <div class="flex flex-col gap-[4rem]">
        <div class="bg-featurebg pt-[5rem] flex justify-between px-[8rem]">
            <div class="flex flex-col gap-[1rem]">
                <h5 class="text-[1.3rem] font-medium capitalize">support</h5>
                <h2 class="text-[5rem] font-medium font-dm leading-[5.4rem]">How can<br/> we help you?</h2>
            </div>
            <div>
                <BaseIcon name="supportApp"/>
            </div>
        </div>

            <div>
                <cta />
            </div>
    
        <ui-container>
            <div class="flex gap-[4rem] justify-between w-full py-[4.5rem]">
                <div class="bg-drop rounded-lg w-[30%] flex flex-col gap-[1.5rem] items-start justify-start h-[0%] pb-[3rem] px-[2rem]">
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