<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from "vue-router";
import BaseIcon from './BaseIcon.vue';
    const Links = [
        {
           text: "features",
           href: "/feature"
        },
        {
            text:"compare",
            href: "/compare"
        },
        {
            text: "support",
            href: "/support"
        },
        {
            text: "blog",
            href : "/blog"
        },
    ]

    const showNav = ref(false)
    const navRef = ref(null)
    const toggleNav = () => {
        showNav.value = !showNav.value
    }

    const closeNavOnOutsideClick = (event) => {
  if (
    showNav.value &&
    navRef.value &&
    !showNav.value.contains(event.target)
  ) {
    showNav.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', closeNavOnOutsideClick);
});

// Don't forget to remove the event listener when the component is unmounted
onUnmounted(() => {
  document.removeEventListener('click', closeNavOnOutsideClick);
});
</script>

<template>
    <header class="bg-white w-full sticky top-0 px-[1rem] py-[1rem] md:px-[5.5rem]  md:py-[1.5rem] z-[51]">
        <nav class="flex justify-between items-center">
                <div>
                   <router-link to="/">
                    <BaseIcon name="logo" />
                   </router-link>
                </div>
                <ul class="hidden md:flex items-center gap-[1rem]">
                    <router-link active-class="bg-drop px-[1rem] py-[.4rem] rounded-md" class=" text-[1rem] capitalize font-medium cursor-pointer hover:bg-drop px-[1rem] py-[.4rem] rounded-md" v-for="link in Links" :key="link.text" :to="link.href">
                        {{ link.text }}
                    </router-link>
                </ul>
                <div class="md:flex gap-[2.4rem] items-center hidden">
                    <a class="text-primary font-medium">Login</a>
                    <button class="btn">Open Account</button>
                </div>
                <button @click="toggleNav" class="flex flex-col gap-[5px] md:hidden">
                    <span class="duration-700 ease-in">
                        <BaseIcon :name="showNav ? 'closeIcon' : 'navIcon'" />
                    </span>
                </button>
        </nav>
    </header>

    <Transition name="slide">
        <nav v-if="showNav" class="fixed w-full nav-mobile">
            <ul class="bg-black/50 h-screen z-50">
                <li class="flex flex-col gap-[2rem] bg-white px-[1.5rem] py-[3.5rem] w-[60%] h-full">
                    <router-link class="font-medium text-[1.2rem] font-dm capitalize" v-for="link in Links" :key="link.text" :to="link.href">
                {{ link.text }}
              </router-link>
              <div class="flex flex-col gap-[2.4rem] md:hidden">
                <a class="text-primary font-medium text-[1.2rem]">Login</a>
                <button class="btn">Open Account</button>
            </div>
                </li>
            </ul>
        </nav>
    </Transition>
    
</template>

<style scoped>

</style>