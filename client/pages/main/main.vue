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
        <div class="cheerup-text">加油！{{ '用户昵称' }}</div>
        <div>
          本月你战胜了小区内<span class="cheerup-num"> {{ 199 }} </span>用户啦!
        </div>
      </div>
      <div class="cheerup-userava"></div>
    </div>

    <div class="total">本月总计回收数量</div>

    <div class="news">新闻</div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem, Lazyload } from 'vant';

  import api from 'libjs/api';
  import { funcItem } from './constant';

  Vue.use(Lazyload);

  export default {
    name: 'Main',

    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Lazyload.name]: Lazyload,
    },

    // 登录的时候立即获取轮播图的数据
    created() {
      api.get('/swiper/img').then(res => {
        this.images = res.data;
      });
    },

    data() {
      return {
        // 轮播图的数据
        images: [],
        // 函数功能列表
        funcItem,
      };
    },

    methods: {
      // todo
      // 不同的功能跳转到不同的路由
      jumpTo(url) {
        console.log(url);
      },
    },
  };
</script>

<style lang="scss">
  .van-swipe {
    height: 2.666667rem /* 200/75 */;
  }

  .van-swipe-item {
    height: 2.666667rem /* 200/75 */;

    img {
      @include fullFill();
    }
  }

  .func {
    @include displayCenter();

    width: 100%;
    margin-top: 0.4rem; /* 30/75 */
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.2rem /* 15/75 */;

    &-item {
      @include displayCenter();

      flex: 1;
      flex-wrap: wrap;
    }

    &-img {
      @include size(0.666667rem /* 50/75 */);

      display: flex;

      img {
        @include fullFill();
        @include round();
      }
    }

    &-title {
      margin-top: 0.133333rem /* 10/75 */;
    }
  }

  .cheerup {
    display: flex;
    border-radius: 30rem;
    margin: 0.133333rem /* 10/75 */ auto;
    width: 95%;
    padding: 0.2rem /* 15/75 */;
    background: yellow;
    box-sizing: border-box;
    justify-content: space-between;

    &-text {
      font-size: 0.266667rem /* 20/75 */;
      margin-bottom: 0.106667rem /* 8/75 */;
    }

    &-num {
      background: greenyellow;
      border-radius: 0.133333rem /* 10/75 */;
    }

    &-userava {
      @include size(0.666667rem /* 50/75 */);
      @include round();

      background: red;
    }
  }
</style>
