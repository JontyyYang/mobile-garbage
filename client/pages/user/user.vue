<template>
  <div class="home">
    <div class="userInfo-container">
      <div class="userInfo-icon">
        <van-image width="80" height="80" :src="userInfo.user_ava || ava" />
      </div>

      <div class="userInfo-info">
        <div>{{ userInfo.user_name }}</div>

        <div>{{ userInfo.user_phone }}</div>
      </div>
    </div>

    <van-cell-group title="信息">
      <van-cell title="个人信息" is-link to="/home/user/basicInfo" label="个人信息相关" />

      <van-cell title="地址" is-link to="/home/user/areaList" label="选择个人详细地址" />

      <van-cell title="时间" is-link to="/home/user/time" label="选择时间" />

      <van-cell title="密码" is-link to="/home/user/password" label="修改密码" />
    </van-cell-group>

    <van-cell-group title="其它">
      <van-cell title="目标" is-link to="/extra/target" label="本月回收目标" />

      <van-cell title="回收订单" is-link to="/extra/order" label="本月商品订单" />

      <van-cell title="商品订单" is-link to="/extra/good" label="本月回收订单" />
    </van-cell-group>
  </div>
</template>
<script>
  import { createNamespacedHelpers } from 'vuex';
  import { Cell, CellGroup, Image } from 'vant';
  import cookie from 'js-cookie';
  import api from 'libjs/api';
  import ava from 'libimg/avator.jpg';

  const { mapState: mapUserState } = createNamespacedHelpers('user');

  export default {
    name: 'User',

    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Image.name]: Image,
    },

    mounted() {
      const userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;
      api
        .get('/mobile/user/getUser', {
          params: {
            userId: userInfo_userId,
          },
        })
        .then(res => {
          if (res.data.code === 0) {
            this.userInfo = res.data.data;
          }
        });
    },

    data() {
      return {
        userInfo: {},
        ava,
      };
    },
  };
</script>
<style lang="scss">
  @import './index.scss';
</style>
