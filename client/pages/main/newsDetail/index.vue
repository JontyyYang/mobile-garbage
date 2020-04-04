<template>
  <div class="news-detail-container">
    <h1 class="news-detail-title">{{ newsInfo.news_title }}</h1>
    <img :src="newsInfo.news_picurl" alt="" class="news-detail-img" />
    <div v-html="newsInfo.news_info" class="news-detail-info"></div>
  </div>
</template>
<script>
  import api from 'libjs/api';
  import { Notify } from 'vant';

  export default {
    name: 'NewsDetail',
    data() {
      return {
        newsInfo: {},
      };
    },
    created() {
      api
        .get('/newsList/getNews', {
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
  };
</script>
<style lang="scss">
  @import './index.scss';
</style>
