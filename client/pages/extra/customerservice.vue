<!--
 * @Author: jontyy
 * @Date: 2020-05-11 21:59:28
 * @Description: 
 -->

<template>
  <div>
    <van-nav-bar
      title="常见问题"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-collapse v-model="activeNames">
      <van-collapse-item title="如何注册" name="1"
        >如何注册如何注册如何注册如何注册如何注册如何注册</van-collapse-item
      >
      <van-collapse-item title="如何呼唤工作人员" name="2"
        >如何呼唤工作人员如何呼唤工作人员如何呼唤工作人员如何呼唤工作人员如何呼唤工作人员</van-collapse-item
      >
      <van-collapse-item title="如何查看积分" name="3"
        >如何查看积分如何查看积分如何查看积分如何查看积分如何查看积分</van-collapse-item
      >
      <van-collapse-item title="如何修改个人信息" name="4"
        >如何修改个人信息如何修改个人信息如何修改个人信息如何修改个人信息如何修改个人信息</van-collapse-item
      >
      <van-collapse-item title="如何发布广告" name="5"
        >如何发布广告如何发布广告如何发布广告如何发布广告</van-collapse-item
      >
    </van-collapse>
  </div>
</template>
<script>
  import { Collapse, CollapseItem, NavBar } from 'vant';
  export default {
    name: 'Good',
    components: {
      [Collapse.name]: Collapse,
      [CollapseItem.name]: CollapseItem,
      [NavBar.name]: NavBar,
    },
    data() {
      return {
        activeNames: ['1'],
      };
    },
    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},
    },
  };
</script>
