import Vue from 'vue';
import VueRouter from 'vue-router';
// eslint-disable-next-line

Vue.use(VueRouter);

const routes = [
  {
    path: '/normal',
    component: () => import('./pages/normal/normal.vue'),
  },
  {
    path: '/login',
    component: () => import('./pages/login/login.vue'),
  },
  {
    path: '*',
    component: () => import('./pages/home/home.vue'),
  },
];
const router = new VueRouter({ routes });
// router.start();

export default router;
