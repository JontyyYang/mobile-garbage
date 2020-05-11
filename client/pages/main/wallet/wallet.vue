<!--
 * @Author: jontyy
 * @Date: 2020-05-11 19:24:32
 * @Description: 
 -->
<template>
  <div>
    <van-nav-bar
      title="环保钱包"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="center">
      <van-circle
        v-model="currentRate"
        :rate="currentRate"
        layer-color="#ebedf0"
        :speed="100"
        :text="text"
        size="200px"
      />
    </div>
  </div>
</template>

<script>
  import { NavBar, Circle } from 'vant';
  import api from 'libjs/api';
  import cookie from 'js-cookie';

  export default {
    name: 'Wallet',

    components: {
      [NavBar.name]: NavBar,
      [Circle.name]: Circle,
    },

    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},
    },

    computed: {
      text() {
        return `已经获得${this.currentRate}积分，目标是${this.target}`;
      },
    },

    created() {
      const userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;

      api
        .get('/mobile/getMoney', {
          params: {
            user_id: JSON.parse(cookie.get('jscookieTest')).user_id,
          },
        })
        .then(res => {
          let num = 0;

          if (res.data.code === 0) {
            res.data.data.map(item => {
              num += Number.parseInt(item.money);
            });
          }
          this.currentRate = num;
        });
      api
        .get('/mobile/getNewTarget', {
          params: {
            user_id: userInfo_userId,
          },
        })
        .then(res => {
          if (res.data.code === 0) {
            if (res.data.data.length === 0) {
              // 啥事不用做
            } else {
              this.target = res.data.data[0].target;
            }
          }
        });
    },

    data() {
      return {
        currentRate: 0,
        target: 0,
      };
    },
  };
</script>
<style lang="scss" scoped>
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
