<!--
 * @Author: jontyy
 * @Date: 2020-05-10 17:34:15
 * @Description: 
 -->
<template>
  <div class="button-container">
    <van-notice-bar text="通知内容" left-icon="volume-o" />
    <div class="container">
      <van-button type="info" size="large" block class="margin">待接单{{ waitOrder }}</van-button>
      <van-button type="primary" size="large" block>已接单{{ ordered }}</van-button>
    </div>
  </div>
</template>
<script>
  import { Button, NoticeBar } from 'vant';

  export default {
    name: 'OtherHome',

    components: {
      [Button.name]: Button,
      [NoticeBar.name]: NoticeBar,
    },

    data() {
      return {
        waitOrder: '1',
        ordered: '2',
      };
    },

    created() {
      // 获取订单数
      // 获取已接单数
    },
  };
</script>
<style lang="scss" scoped>
  .button-container {
    height: 100%;

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
</style>
