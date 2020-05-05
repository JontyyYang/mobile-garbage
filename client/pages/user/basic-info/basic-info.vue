<template>
  <div class="basic-info-container">
    <van-nav-bar
      title="基本信息"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-form @submit="onSubmit">
      <van-field
        v-model="userInfo.user_name"
        name="user_name"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />

      <van-field
        v-model="userInfo.user_nickname"
        name="user_nickname"
        label="用户昵称"
        placeholder="用户昵称"
        :rules="[{ required: true, message: '请填写用户昵称' }]"
      />

      <van-field
        v-model="userInfo.user_phone"
        name="user_phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />

      <van-field
        v-model="userInfo.user_ava"
        name="user_ava"
        label="头像"
        placeholder="头像"
        :rules="[{ message: '头像' }]"
      />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
  import cookie from 'js-cookie';
  import { Form, Field, Button, Notify, NavBar } from 'vant';
  import api from 'libjs/api';
  import 'vant/lib/index.css';

  export default {
    name: 'basic-info',

    mounted() {
      const userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;

      api
        .get('/mobile/user/getUser', {
          params: {
            userId: userInfo_userId,
          },
        })
        .then(res => {
          if (res.data.code === 0) {
            this.userInfo = res.data.data;
          }
        });
    },

    data() {
      return { userInfo: {} };
    },

    components: {
      [Form.name]: Form,

      [Field.name]: Field,

      [Button.name]: Button,

      [Notify.name]: Notify,

      [NavBar.name]: NavBar,
    },

    methods: {
      onSubmit(values) {
        const value = {
          ...values,
          user_id: this.userInfo.user_id,
        };
        api
          .post('/mobile/user/updateUser', {
            value,
          })
          .then(res => {
            if (res.data.code === 0) {
              Notify({ type: 'success', message: res.data.message });
              setTimeout(() => {
                this.$router.back();
              }, 1000);
            }
          });
      },

      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},
    },
  };
</script>
<style lang="scss">
  .basic-info-container {
    padding: 0.266667rem; /* 20/75 */
  }
</style>
