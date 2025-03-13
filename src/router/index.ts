import { createRouter, createWebHistory } from 'vue-router'
import DashboardMain from '@/components/dashboard/DashboardMain/DashboardMain.vue';
import SocialLinksMain from '@/components/soc_links/SocialLinksMain/SocialLinksMain.vue';
import DiscoverMain from '@/components/discover/DiscoverMain/DiscoverMain.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: DashboardMain,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardMain,
    },
    {
      path: '/social_links',
      name: 'social_links',
      component: SocialLinksMain,
    },
    {
      path: '/discover',
      name: 'discover',
      component: DiscoverMain,
    },
  ],
})

export default router
