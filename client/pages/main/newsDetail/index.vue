<template>
  <div class="news-detail-container">
    <van-nav-bar
      title="新闻页"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <h1 class="news-detail-title">{{ newsInfo.news_title }}</h1>

    <img :src="newsInfo.news_picurl" alt="" class="news-detail-img" />

    <div v-html="newsInfo.news_info" class="news-detail-info"></div>
  </div>
</template>
<script>
  import api from 'libjs/api';
  import { Notify, NavBar } from 'vant';

  export default {
    name: 'NewsDetail',

    data() {
      return {
        newsInfo: {},
      };
    },

    components: {
      [NavBar.name]: NavBar,

      [Notify.name]: Notify,
    },

    created() {
      api
        .get('/mobile/newsList/getNews', {
          params: {
            newsId: this.$route.query.id,
          },
        })
        .then(res => {
          if (res.data.code === 0) {
            this.newsInfo = res.data.data;
          } else {
            Notify(res.data.message);
            return;
          }
        });
    },
    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},
    },
  };
</script>
<style lang="scss">
  @import './index.scss';
</style>
