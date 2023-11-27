<script setup>
import UiContainer from '../components/UiContainer.vue';
import Hero from '../components/LandingPageComp/Hero.vue'
import feature from '../components/LandingPageComp/feature.vue';
import transaction from '../components/LandingPageComp/transaction.vue'
import TheSavings from '../components/LandingPageComp/TheSavings.vue'
import notification from '../components/LandingPageComp/notification.vue';
import tools from '../components/LandingPageComp/tools.vue'
import TheAccount from '../components/LandingPageComp/TheAccount.vue';
import testimonial from '../components/LandingPageComp/testimonial.vue'
import cta from '../components/LandingPageComp/cta.vue'
import faq from '../components/LandingPageComp/faq.vue'
import blog from '../components/LandingPageComp/blog.vue';

</script>

<template>
  <div>
      <ui-container>
        <Hero />
        <feature />
      </ui-container>
      <transaction/>
      <ui-container>
        <TheSavings />
        <notification />
        <tools />
        <TheAccount />
        <testimonial />
        <cta />
        <faq />
        <blog />
      </ui-container>
  </div>
</template>

<style scoped>

</style>
