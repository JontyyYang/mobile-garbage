import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: () => import('./pages/login/login.vue'),
  },
  {
    path: '/normal',
    component: () => import('./pages/normal/normal.vue'),
  },
  {
    path: '/home',
    component: () => import('./pages/home/home.vue'),
    children: [
      {
        path: 'shop',
        component: () => import('./pages/shop/shop.vue'),
      },
      {
        path: 'user',
        component: () => import('./pages/user/user.vue'),
      },
      {
        path: '/',
        component: () => import('./pages/main/main.vue'),
      },
    ],
  },
  {
    path: '*',
    component: () => import('./pages/login/login.vue'),
  },
];
const router = new VueRouter({ routes });
// router.start();

export default router;
