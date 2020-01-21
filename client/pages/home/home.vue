<template>
  <div>
    <div>
      <div class="title">基于vue、vant的简单移动端小脚手架</div>
      <router-link to="/login" class="no-style">跳转到登录页</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.no-style {
  display: flex;
  text-decoration: none;
  color: blueviolet;
  margin: 20px auto;
}
</style>
