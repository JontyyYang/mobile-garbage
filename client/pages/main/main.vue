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
  import { Swipe, SwipeItem, Lazyload, Dialog, Toast } from 'vant';

  import api from 'libjs/api';
  import { formatTime } from 'libjs/util';

  import ava from 'libimg/avator.jpg';
  import { funcItem, functionName } from './constant';
  import cookie from 'js-cookie';

  Vue.use(Lazyload);

  export default {
    name: 'Main',

    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Lazyload.name]: Lazyload,
      [Dialog.name]: Dialog,
      [Toast.name]: Toast,
    },

    created() {
      // 登录的时候立即获取轮播图的数据
      api.get('/mobile/swiper/img').then(res => {
        this.images = res.data.imgData;
        this.userNickname = res.data.userShowInfo.user_nickname;
        this.userAva = res.data.userShowInfo.user_ava ? res.data.userShowInfo.user_ava : ava;
      });

      // 同时获取新闻数据
      api.get('/mobile/newsList/getNewList').then(res => {
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
      jumpTo(name) {
        if (name === functionName.callService) {
          Dialog.confirm({
            title: '呼唤工作人员',
            message: '确定开始呼唤工作人员吗',
          })
            .then(() => {
              // on confirm
              // 请求数据

              api
                .post('/mobile/askOrder', {
                  order_time: new Date(),
                  user_id: JSON.parse(cookie.get('jscookieTest')).user_id,
                  status: 1,
                })
                .then(res => {
                  if (res.data.code === 0) {
                    Toast('已经呼唤工作人员，请耐心等待');
                  }
                });
            })
            .catch(() => {
              // on cancel
              // 取消就当无事发生
            });
        } else if (name === functionName.wallet) {
          this.$router.push({ path: '/wallet' });
        } else if (name === functionName.order) {
          this.$router.push({ path: '/extra/order' });
        } else if (name === functionName.CustomerService) {
          this.$router.push({ path: '/extra/customerservice' });
        } else if (name === functionName.Leaderboard) {
          Toast('该功能还没有准备好呀，敬请期待');
        }
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
