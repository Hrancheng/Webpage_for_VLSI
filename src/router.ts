// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// 导入您的组件
import Homepage from '@/components/Homepage.vue';
import People from '@/components/People.vue';
import News from '@/components/News.vue';
import Publication from '@/components/Publication.vue';
import Research from '@/components/Research.vue';
import Teaching from '@/components/Teaching.vue';
import About from '@/components/About.vue';
import Blog from '@/components/Blog.vue';
import Prospective_student from '@/components/Prospective_student.vue';
import Outreach from '@/components/Outreach.vue';

// 导入新的研究部分组件
import OpenFASoCPage from '@/components/Research1.vue';
import CryogenicPage from '@/components/Research2.vue';
import EnergyEfficientPage from '@/components/Research3.vue';
import CodesignPage from '@/components/Research4.vue';
import BioElectricalPage from '@/components/Research5.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Homepage, alias: '/home' },
  { path: '/about', name: 'About', component: About },
  { path: '/people', name: 'People', component: People },
  { path: '/news', name: 'news', component: News },
  { path: '/publication', name: 'publication', component: Publication },
  { path: '/research', name: 'research', component: Research },
  { path: '/teaching', name: 'teaching', component: Teaching },
  { path: '/blog', name: 'blog', component: Blog },
  { path: '/prospective_student', name: 'prospective_student', component: Prospective_student },
  { path: '/outreach', name: 'outreach', component: Outreach },
  // 新增研究部分的路由
  { path: '/research/openfasoc', name: 'OpenFASoCPage', component: OpenFASoCPage },
  { path: '/research/cryogenic', name: 'CryogenicPage', component: CryogenicPage },
  { path: '/research/energy-efficient', name: 'EnergyEfficientPage', component: EnergyEfficientPage },
  { path: '/research/Codesign', name: 'CodesignPage', component: CodesignPage },
  { path: '/research/bio-electrical', name: 'BioElectricalPage', component: BioElectricalPage },
  // ... 其他路由
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
