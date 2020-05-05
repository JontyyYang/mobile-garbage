<template>
  <div>
    <van-grid :column-num="3">
      <van-grid-item v-for="item of goodsInfo" :key="item.good_id" @click="goodDetail(item)">
        <van-image :src="item.good_img" />
        <p>{{ item.good_name }}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
  import { Grid, GridItem, Image } from 'vant';
  import api from 'libjs/api';

  export default {
    name: 'Shop',

    components: {
      [Grid.name]: Grid,
      [GridItem.name]: GridItem,
      [Image.name]: Image,
    },

    data() {
      return {
        goodsInfo: [],
      };
    },

    mounted() {
      api.get('/mobile/good/getGoods').then(res => {
        this.goodsInfo = res.data.data;
      });
    },

    methods: {
      goodDetail(e) {
        this.$router.push({
          path: '/home/shop/goodsDetail',
          query: { good_id: e.good_id },
        });
      },
    },
  };
</script>
