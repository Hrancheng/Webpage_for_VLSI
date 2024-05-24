// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Import your components
import Homepage from '@/components/Homepage.vue';
import People from '@/components/People.vue';
import News from '@/components/News.vue';
import Publication from '@/components/Publication.vue';
import Research from '@/components/Research.vue';
import Teaching from '@/components/Teaching.vue';
import About from '@/components/About.vue';
import Blog from '@/components/Blog';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Homepage, alias: '/home'},
  { path: '/about', name: 'About', component: About},
  { path: '/people', name: 'People', component: People },
  { path: '/news', name: 'news', component: News },
  { path: '/publication', name: 'publication', component: Publication},
  { path: '/research', name: 'research', component: Research},
  { path: '/teaching', name: 'teaching', component: Teaching},
  { path: '/blog', name: 'blog', component: Blog},
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
