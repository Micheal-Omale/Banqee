<script setup>
import featureHero from '../components/FeaturePageComp/featureHero.vue';
import UiContainer from '../components/UiContainer.vue';
import featureSection from '../components/FeaturePageComp/featureSection.vue'
import featureBank from '../components/FeaturePageComp/featureBank.vue';
import featureCards from '../components/FeaturePageComp/featureCards.vue';
import cta from '../components/LandingPageComp/cta.vue';
import faq from '../components/landingpagecomp/faq.vue';
</script>

<template>
    <div>
        <featureHero />
        <ui-container>
            <featureSection />
            <featureBank />
            <featureCards />
            <cta />
            <faq />
        </ui-container>
    </div>
</template>

<style lang="scss" scoped>

</style>