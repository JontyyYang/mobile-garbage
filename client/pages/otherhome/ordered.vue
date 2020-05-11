<!--
 * @Author: jontyy
 * @Date: 2020-05-11 11:39:50
 * @Description: 
 -->

<template>
  <div>
    <van-nav-bar
      title="待接单"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-list>
      <van-cell
        v-for="item in orderInfo"
        :key="item.id"
        :title="`请求人信息：${item.addressDetail} ${item.tel}`"
        @click="care(item)"
      />
    </van-list>
  </div>
</template>
<script>
  import { NavBar, List, Cell, Dialog, Toast } from 'vant';
  import api from 'libjs/api';

  export default {
    name: 'Ordered',

    components: {
      [NavBar.name]: NavBar,
      [List.name]: List,
      [Cell.name]: Cell,
      [Dialog.name]: Dialog,
      [Toast.name]: Toast,
    },

    data() {
      return {
        ordered: [],
        orderInfo: [],
      };
    },

    created() {
      // 获取已接单数
      api.get('/mobile/ordered').then(res => {
        if (res.data.code === 0) {
          this.ordered = res.data.data;
          for (let item of res.data.data) {
            api
              .get('/mobile/user/getOneAreaById', {
                params: {
                  userId: item.user_id,
                },
              })
              .then(res => {
                res.data.data.orderId = item.id;
                this.orderInfo.push(res.data.data);
              });
          }
        }
      });
    },

    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},

      care(item) {
        this.$router.push({
          path: '/money',
          query: {
            orderId: JSON.stringify(item.orderId),
            user_id: item.user_id,
            order_id: item.id,
          },
        });
      },
    },
  };
</script>
