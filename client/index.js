import Vue from 'vue';

import setFontSize from 'libjs/setFontSize';
import App from './pages/App.vue';
import router from './router';
import store from './store/index';
import 'libcss/reset.less';
import 'libcss/mixin.scss';

setFontSize();

const app = new Vue({
  ...App,
  store,
  router,
}).$mount();

document.body.replaceChild(app.$el, document.getElementById('app'));
