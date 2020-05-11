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
    path: '/newsDetail',
    component: () => import('./pages/main/newsDetail/index.vue'),
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
    path: '/home/shop/goodsDetail',
    component: () => import('./pages/shop/goodDetail/goodDetail.vue'),
  },
  {
    path: '/home/user/basicInfo',
    component: () => import('./pages/user/basic-info/basic-info.vue'),
  },
  {
    path: '/home/user/areaList',
    component: () => import('./pages/user/choose-area/area-list.vue'),
  },
  {
    path: '/home/user/addArea',
    component: () => import('./pages/user/add-area/add-area.vue'),
  },
  {
    path: '/home/user/editArea',
    component: () => import('./pages/user/edit-area/edit-area.vue'),
  },
  {
    path: '/home/user/time',
    component: () => import('./pages/user/time/time.vue'),
  },
  {
    path: '/home/user/password',
    component: () => import('./pages/user/password/password.vue'),
  },
  {
    path: '/otherhome',
    component: () => import('./pages/otherhome/other-home.vue'),
  },
  {
    path: '/otherhome/WaitOrder',
    component: () => import('./pages/otherhome/wait-order.vue'),
  },
  {
    path: '/otherhome/ordered',
    component: () => import('./pages/otherhome/ordered.vue'),
  },
  {
    path: '/money',
    component: () => import('./pages/otherhome/money.vue'),
  },
  {
    path: '*',
    component: () => import('./pages/login/login.vue'),
  },
];
const router = new VueRouter({ routes });
// router.start();

export default router;
