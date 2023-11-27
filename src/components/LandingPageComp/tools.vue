<script setup>
    import BaseIcon from '../BaseIcon.vue';

    const marks = [{
            icon: 'check',
            text: 'Secure and encrypted integration',
            id: 1,
        },
        {
            icon: 'check',
            text: 'Fully API interface',
            id: 2
        },
        {
            icon: 'check',
            text: 'Payments worldwide',
            id: 3
        }
    ]

    const logos = [{
            icon: 'webflow',
            id: 1
        },
        {
            icon: 'shopify',
            id: 2
        },
        {
            icon: 'zapier',
            id: 3
        },
        {
            icon: 'bitcoin',
            id: 4
        },
        {
            icon: 'paypal',
            id: 5
        },
        {
            icon: 'mastercard',
            id: 6
        },
        {
            icon: 'visa',
            id: 7
        },
        {
            icon: 'gpay',
            id: 8
        },
        {
            icon: 'applepay',
            id: 9
        },
        {
            icon: 'amazonpay',
            id: 10
        }
    ]
</script>

<template>
    <div class="md:py-[4.5rem]">
        <div class="flex flex-col gap-[6.4rem]">
            <div class="flex flex-wrap w-[70%] gap-[1rem]">
                <div class="" v-for="icon in logos" :key="icon.id">
                    <BaseIcon :name="icon.icon" />
                </div>
            </div>
            <div class="flex gap-[10rem]">
                <div class="flex flex-col gap-[1.2rem] w-1/2">
                    <h5 class="text-[1.3rem] font-medium font-dm ">Tools</h5>
                    <h2 class="font-medium font-dm text-[4rem] leading-[1.2]">Seamless <br /> integration</h2>
                    <p class="font-medium text-[1.1rem]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit.</p>
                </div>
                <div class="flex flex-col gap-[1rem] pt-[15%]">
                    <div v-for="link in marks" :key="link.id">
                        <span class="flex gap-[1rem] text-[1.1rem] font-medium">
                            <BaseIcon :name="link.icon" />
                            {{ link.text }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>