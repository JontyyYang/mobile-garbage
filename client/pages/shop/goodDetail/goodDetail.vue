<template>
  <div>
    <van-nav-bar
      title="商品页"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-card
      :num="goodInfo.good_num"
      :price="goodInfo.good_price"
      :desc="goodInfo.good_info"
      :title="goodInfo.good_name"
      :thumb="goodInfo.good_img"
    />

    <van-submit-bar
      :price="Number.parseInt(goodInfo.good_price) * 100"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
  import { Card, SubmitBar, Dialog, NavBar } from 'vant';
  import api from 'libjs/api';

  export default {
    name: 'GoodsDetail',

    components: {
      [Card.name]: Card,

      [SubmitBar.name]: SubmitBar,

      [Dialog.name]: Dialog,
      [NavBar.name]: NavBar,
    },

    data() {
      return { goodInfo: {} };
    },

    mounted() {
      api
        .get('/mobile/good/getOneGood', {
          params: {
            good_id: this.$route.query.good_id,
          },
        })
        .then(res => {
          if (res.data.code === 0) {
            this.goodInfo = res.data.data;
          } else {
            Notify(res.data.message);
            return;
          }
        });
    },

    methods: {
      onSubmit() {
        Dialog.confirm({
          title: '购买',
          message: '确认购买吗',
        })
          .then(() => {
            // on confirm
            this.$router.go(-1);
          })
          .catch(() => {
            // on cancel
          });
      },

      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},
    },
  };
</script>
