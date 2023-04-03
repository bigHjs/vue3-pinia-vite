import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/home.vue';
import Other from '@/pages/other.vue';


const routes = [
  {
    path: '',
    redirect: (_) => {
      return {path: '/home'};
    }
  },
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/other',
    name: '其他',
    component: Other
  },
];
const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    };
  }
});
export default router;
