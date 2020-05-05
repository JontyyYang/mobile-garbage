<template>
  <div>
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
      <van-cell title="个人信息" is-link to="index" label="个人信息相关" />
      <van-cell title="地址" is-link to="index" label="描述信息" />
      <van-cell title="时间" is-link to="index" label="描述信息" />
    </van-cell-group>
    <van-cell-group title="其它">
      <van-cell title="目标" is-link url="/vant/mobile.html" label="描述信息" />
      <van-cell title="订单" is-link to="index" label="描述信息" />
      <van-cell title="新闻" is-link url="/vant/mobile.html" label="描述信息" />
    </van-cell-group>
  </div>
</template>
<script>
  import { createNamespacedHelpers } from 'vuex';
  import { Cell, CellGroup, Image } from 'vant';
  import cookie from 'js-cookie';

  import ava from 'libimg/avator.jpg';

  const { mapState: mapUserState } = createNamespacedHelpers('user');

  export default {
    name: 'User',

    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Image.name]: Image,
    },

    data() {
      return {
        userInfo: JSON.parse(cookie.get('jscookieTest')),
        ava,
      };
    },
  };
</script>
<style lang="scss">
  @import './index.scss';
</style>
