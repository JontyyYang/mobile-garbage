<!--
 * @Author: jontyy
 * @Date: 2020-01-30 13:35:48
 * @Description: 主页面
 -->
<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index"
        height="2.666667rem"
        autoplay="3000"
      >
        <img v-lazy="image.img_src" />
      </van-swipe-item>
    </van-swipe>

    <div class="func">
      <div
        v-for="(item, index) in funcItem"
        :key="index"
        class="func-item"
        @click="jumpTo(item.funcUrl)"
      >
        <div class="func-img"><img :src="item.funcImg" /></div>
        <div class="func-title">{{ item.funcName }}</div>
      </div>
    </div>

    <div class="cheerup">
      <div>
        <div class="cheerup-text">加油！{{ userNickname }}</div>
        <div>
          本月你战胜了小区内<span class="cheerup-num"> {{ 199 }} </span>用户啦!
        </div>
      </div>
      <div class="cheerup-userava">
        <img :src="userAva" alt="" />
      </div>
    </div>

    <div class="total">本月总计回收数量</div>

    <div class="newsList">
      <div v-for="item in newsList" :key="item.id" class="newsList-item" @click="lookMore(item.id)">
        <!-- {{ item }} -->
        <div class="newsList-item-pic">
          <img :src="item.news_picurl ? item.news_picurl : userAva" alt="" />
        </div>
        <div class="newsList-item-container">
          <div class="newsList-item-title">标题：{{ item.news_title }}</div>
          <div class="newsList-item-content" v-html="`${item.news_info}`"></div>
          <div class="newsList-item-content">时间：{{ item.news_time }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem, Lazyload } from 'vant';

  import api from 'libjs/api';
  import { formatTime } from 'libjs/util';

  import ava from 'libimg/avator.jpg';
  import { funcItem } from './constant';

  Vue.use(Lazyload);

  export default {
    name: 'Main',

    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Lazyload.name]: Lazyload,
    },

    created() {
      // 登录的时候立即获取轮播图的数据
      api.get('/swiper/img').then(res => {
        this.images = res.data.imgData;
        this.userNickname = res.data.userShowInfo.user_nickname;
        this.userAva = res.data.userShowInfo.user_ava ? res.data.userShowInfo.user_ava : ava;
      });

      // 同时获取新闻数据
      api.get('./newsList/getNewList').then(res => {
        res.data.data.forEach(element => {
          element.news_time = formatTime(element.news_time);
        });
        this.newsList = res.data.data;
      });
    },

    data() {
      return {
        // 轮播图的数据
        images: [],
        // 函数功能列表
        funcItem,
        // 用户昵称
        userNickname: '',
        // 用户头像
        userAva: '',
        // 新闻
        newsList: [],
      };
    },

    methods: {
      // todo
      // 不同的功能跳转到不同的路由
      jumpTo(url) {
      console.log(url); //eslint-disable-line
      },
      lookMore(id) {
        this.$router.push({ path: '/newsDetail', query: { id: id } });
      },
    },
  };
</script>

<style lang="scss">
  @import './index.scss';
</style>
