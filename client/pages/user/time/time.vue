<!--
 * @Author: jontyy
 * @Date: 2020-05-10 13:35:31
 * @Description: 
 -->
<template>
  <div>
    <van-nav-bar
      title="上门自提时间选择"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-datetime-picker
      v-model="currentDate"
      type="datetime"
      title="选择完整时间"
      :min-date="minDate"
      :max-date="maxDate"
      :cancel-button-text="' '"
      @confirm="confirm"
    />
  </div>
</template>
<script>
  import { NavBar, Field, DatetimePicker } from 'vant';
  import cookie from 'js-cookie';
  import api from 'libjs/api';

  export default {
    name: 'Time',

    components: {
      [NavBar.name]: NavBar,
      [DatetimePicker.name]: DatetimePicker,
      [Field.name]: Field,
    },

    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},

      confirm() {
        const userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;
        api
          .post('/mobile/time/updateTime', { user_id: userInfo_userId, time: this.currentDate })
          .then(res => {
            if (res.data.code === 0) {
              this.$router.back();
            }
          });
      },
    },

    data() {
      return {
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2025, 10, 1),
        currentDate: '',
      };
    },

    created() {
      const userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;
      api
        .get('/mobile/time/getTime', {
          params: {
            user_id: userInfo_userId,
          },
        })
        .then(res => {
          this.currentDate = new Date(res.data.data.user_time);
        });
    },
  };
</script>
