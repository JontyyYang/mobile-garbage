<!--
 * @Author: jontyy
 * @Date: 2020-05-10 15:57:03
 * @Description: 
 -->
<template>
  <div>
    <van-nav-bar
      title="确认收费金额"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="passwordtwo"
        type="text"
        name="money"
        label="奖励金额"
        placeholder="奖励金额"
        :rules="[{ required: true, message: '请填写奖励金额' }]"
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
  import { Form, NavBar, Field, Button, Notify, Toast } from 'vant';
  import api from 'libjs/api';

  export default {
    name: 'Money',

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
        const { money } = values;
        const { user_id, order_id, orderId } = this.$route.query;
        const data = await api.post('/mobile/giveMoney', { money, user_id, order_id, orderId });
        if (data.data.code === 0) {
          Toast('3s后返回');
          setTimeout(() => {
            this.$router.back();
          }, 3000);
        } else {
          Toast(data.data.message);
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
