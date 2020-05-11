<!--
 * @Author: jontyy
 * @Date: 2020-05-11 11:07:25
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
        v-for="item in waitOrder"
        :key="item.id"
        :title="`请求时间：${new Date(item.order_time)}`"
        @click="care(item)"
      />
    </van-list>
  </div>
</template>
<script>
  import { NavBar, List, Cell, Dialog, Toast } from 'vant';
  import api from 'libjs/api';

  export default {
    name: 'WaitOrder',

    components: {
      [NavBar.name]: NavBar,
      [List.name]: List,
      [Cell.name]: Cell,
      [Dialog.name]: Dialog,
      [Toast.name]: Toast,
    },

    data() {
      return {
        waitOrder: [],
      };
    },

    created() {
      // 获取订单数
      api.get('/mobile/waitOrder').then(res => {
        if (res.data.code === 0) {
          this.waitOrder = res.data.data;
        }
      });
    },

    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},

      care(item) {
        Dialog.confirm({
          title: '接单',
          message: '确定接单吗',
        })
          .then(() => {
            api
              .post('/mobile/sureOrder', {
                id: item.id,
              })
              .then(res => {
                if (res.data.code === 0) {
                  Toast('已经接单，请快速上门服务');
                  api.get('/mobile/waitOrder').then(res => {
                    if (res.data.code === 0) {
                      this.waitOrder = res.data.data;
                    }
                  });
                }
              });
          })
          .catch(() => {
            // on cancel
            // 取消就当无事发生
          });
      },
    },
  };
</script>
