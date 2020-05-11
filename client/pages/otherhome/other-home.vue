<!--
 * @Author: jontyy
 * @Date: 2020-05-10 17:34:15
 * @Description: 
 -->
<template>
  <div>
    <van-notice-bar text="在此页面可以放置一些广告和其他信息" left-icon="volume-o" />
    <div class="button-container">
      <div class="container">
        <van-button type="info" size="large" block class="margin" @click="handleWaitOrder"
          >待接单{{ waitOrder }}</van-button
        >
        <van-button type="primary" size="large" block @click="handleOrdered"
          >已接单{{ ordered }}</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
  import { Button, NoticeBar, Notify } from 'vant';
  import api from 'libjs/api';

  export default {
    name: 'OtherHome',

    components: {
      [Button.name]: Button,
      [NoticeBar.name]: NoticeBar,
      [Notify.name]: Notify,
    },

    data() {
      return {
        waitOrder: '',
        ordered: '',
      };
    },

    created() {
      // 获取订单数
      api.get('/mobile/waitOrder').then(res => {
        if (res.data.code === 0) {
          this.waitOrder = res.data.data.length;
        }
      });
      // 获取已接单数
      api.get('/mobile/ordered').then(res => {
        if (res.data.code === 0) {
          this.ordered = res.data.data.length;
        }
      });
    },

    methods: {
      handleWaitOrder() {
        const { waitOrder } = this;
        if (waitOrder === 0) {
          Notify({ type: 'primary', message: '暂时没有待接单的订单哦' });
          return;
        }
        this.$router.push({ path: '/otherhome/WaitOrder' });
      },

      handleOrdered() {
        const { ordered } = this;
        if (ordered === 0) {
          Notify({ type: 'primary', message: '暂时没有已接单的订单哦' });
          return;
        }
        this.$router.push({ path: '/otherhome/ordered' });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .button-container {
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    @include displayCenter();

    .container {
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.4rem /* 30/75 */;

      .margin {
        margin-bottom: 20px;
      }
    }
  }

  .sticky_top {
    position: absolute;
    top: 0;
  }
</style>
