import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import FeatureView from './views/FeatureView.vue'
import CompareView from './views/CompareView.vue'
import SupportView from './views/SupportView.vue'
import BlogView from './views/BlogView.vue'
import BlogViewDetails from './views/BlogViewDetails.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/feature',
      name: 'feature',
      component: FeatureView
    },
    {
      path: '/compare',
      name: 'compare',
      component:CompareView
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:id',
      name: 'blogDetails',
      component: BlogViewDetails
    },
    
  ],
  // For the scrolling behavior
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top:100,
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
})

export default router