// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeComponent.vue';
import About from '../views/AboutComponent.vue';

// ルート定義
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

// ルーターの作成
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
