import { createRouter, createWebHistory } from 'vue-router';
// 导入路由组件
import Fuck from '../components/fuck.vue';
import About from '../components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    component: About,
    // 可选的子路由配置
  },
  {
    path: '/fuck',
    component: Fuck,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;