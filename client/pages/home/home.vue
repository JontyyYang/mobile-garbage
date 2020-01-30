<template>
  <div>
    <div>
      <van-nav-bar :title="NavBarData.title">
        <van-icon name="replay" @click="onClickRight" slot="right" />
      </van-nav-bar>
      <!-- <router-link to="/login" class="no-style">跳转到登录页</router-link> -->
      <router-view />
      <van-tabbar route>
        <van-tabbar-item replace to="/home" icon="wap-home-o">
          首页
        </van-tabbar-item>
        <van-tabbar-item replace to="/home/shop" icon="shop-o">
          商城
        </van-tabbar-item>
        <van-tabbar-item replace to="/home/user" icon="contact" info="9">
          用户
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
  import { NavBar, Toast, Tabbar, TabbarItem, Icon } from 'vant';
  import { NavBarData } from './constant';
  export default {
    name: 'Home',
    components: {
      [NavBar.name]: NavBar,
      [Toast.name]: Toast,
      [Icon.name]: Icon,
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    },
    data() {
      return {
        NavBarData,
      };
    },
    methods: {
      onClickLeft() {
        Toast('返回');
      },
      onClickRight() {
        Toast('刷新');
        this.$router.go(0);
      },
    },
  };
</script>
<style lang="less" scoped>
  // .no-style {
  //   display: flex;
  //   text-decoration: none;
  //   color: blueviolet;
  //   margin: 20px auto;
  // }
</style>
