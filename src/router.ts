// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Import your components
import Homepage from '@/components/Homepage.vue';
import People from '@/components/People.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Homepage, alias: '/home'},
  { path: '/people', name: 'People', component: People },
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
