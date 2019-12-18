<template>
  <div class="test">
    <div>这里的数据从其他页面引入的组件</div>

    <img :src="avator" alt />

    <div>这里是引入的图片</div>

    <van-button type="default">这是vant引入的组件</van-button>

    <van-button type="warning">这是vant引入的组件</van-button>
    <br />
    <router-link to="/login">回到登录页</router-link>
    <div class="t" style="background: red;">
      <router-view></router-view>
    </div>

    <!-- <router-link to="/bar">Go to Bar</router-link> -->
  </div>
</template>
<script>
import { Button } from 'vant';
import avator from 'libimg/avator.jpg';

export default {
  name: 'Test',
  created() {},

  components: {
    [Button.name]: Button,
  },
  data() {
    return {
      avator,
    };
  },
};
</script>
<style lang="less" scoped>
.test {
  color: green;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
}
</style>
