<!--
 * @Author: jontyy
 * @Date: 2020-05-11 20:17:15
 * @Description: 
 -->
<template>
  <div>
    <van-nav-bar
      title="回收订单"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-list>
      <van-cell
        v-for="item in orderList"
        :key="item.id"
        :title="
          `下单时间：${new Date(item.order_time)}，订单状态： ${
            item.status === -1 ? '成功' : item.status === 0 ? '等待接单' : '进行中'
          }`
        "
        @click="lookCare(item)"
      />
    </van-list>
  </div>
</template>
<script>
  import { NavBar, List, Cell, Toast } from 'vant';
  import cookie from 'js-cookie';
  import api from 'libjs/api';

  export default {
    name: 'Order',

    components: {
      [NavBar.name]: NavBar,
      [List.name]: List,
      [Cell.name]: Cell,
      [Toast.name]: Toast,
    },

    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},

      lookCare(item) {
        Toast(JSON.stringify(item));
      },
    },

    created() {
      const userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;
      api
        .get('/mobile/getOrderByUser', {
          params: {
            user_id: userInfo_userId,
          },
        })
        .then(res => {
          this.orderList = res.data.data;
        });
    },

    data() {
      return {
        orderList: [],
      };
    },
  };
</script>
