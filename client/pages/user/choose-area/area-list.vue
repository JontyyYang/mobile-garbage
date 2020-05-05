<template>
  <div>
    <van-nav-bar
      title="地址列表"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>
<script>
  import { NavBar } from 'vant';

  export default {
    name: 'ChooseArea',

    components: {
      [NavBar.name]: NavBar,
    },

    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},
    },
  };
</script>
