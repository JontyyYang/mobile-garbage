/*
 * @Author: jontyy
 * @Date: 2020-01-31 12:10:40
 * @Description: store的入口文件
 */

import Vue from 'vue';
import Vuex from 'vuex';

import user from './module/user';

Vue.use(Vuex);

const modules = { user };

export default new Vuex.Store({ modules });
