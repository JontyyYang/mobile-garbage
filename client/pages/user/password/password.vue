<!--
 * @Author: jontyy
 * @Date: 2020-05-10 15:57:03
 * @Description: 
 -->
<template>
  <div>
    <van-nav-bar
      title="设置密码"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="oldPassword"
        type="password"
        name="oldPassword"
        label="原密码"
        placeholder="原密码"
        :rules="[{ required: true, message: '请填写原密码' }]"
      />
      <van-field
        v-model="passwordone"
        type="password"
        name="passwordone"
        label="新密码"
        placeholder="新密码"
        :rules="[{ required: true, message: '请填写新密码' }]"
      />
      <van-field
        v-model="passwordtwo"
        type="password"
        name="passwordtwo"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写新密码' }]"
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
  import { Form, NavBar, Field, Button, Notify } from 'vant';
  import api from 'libjs/api';
  import md5 from 'js-md5';
  import cookie from 'js-cookie';

  export default {
    name: 'Password',

    components: {
      [Form.name]: Form,
      [NavBar.name]: NavBar,
      [Field.name]: Field,
      [Button.name]: Button,
      [Notify.name]: Notify,
    },

    methods: {
      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},

      async onSubmit(values) {
        const { oldPassword, passwordone, passwordtwo } = values;
        const userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;

        if (passwordone !== passwordtwo) {
          Notify('两次密码不一致');
          return;
        }
        if (passwordtwo.length < 8) {
          Notify('长度必须大于8位');

          return;
        }

        const data = await api.post('/mobile/password/resetPassword', {
          user_id: userInfo_userId,
          oldPassword: md5(oldPassword),
          passwordone: md5(passwordone),
        });
        if (data.data.code === 0) {
          Notify('密码更新成功，3秒后返回上一页');
          setTimeout(() => {
            this.$router.back();
          }, 3000);
        }
      },
    },
    data() {
      return {
        oldPassword: '',
        passwordone: '',
        passwordtwo: '',
      };
    },
  };
</script>
