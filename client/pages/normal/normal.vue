<template>
  <div class="test">
    这是另一个页面
    <test></test>
  </div>
</template>
<script>
  import test from 'pages/test/test.vue';

  export default {
    name: 'Test',
    components: {
      test,
    },
    data() {
      return {};
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
