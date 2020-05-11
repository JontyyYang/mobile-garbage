<!--
 * @Author: jontyy
 * @Date: 2020-05-11 20:17:15
 * @Description: 
 -->
<template>
  <div>
    <van-nav-bar
      title="目标"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-form @submit="setNewTarget">
      <van-field
        v-model="oldTarget"
        type="text"
        name="oldTarget"
        label="目标"
        placeholder="目标"
        disabled
      />
      <van-field
        v-model="newTarget"
        type="text"
        name="newTarget"
        label="新目标"
        placeholder="新目标"
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
  import { NavBar, Form, Field, Button } from 'vant';
  import cookie from 'js-cookie';
  import api from 'libjs/api';

  export default {
    name: 'Target',

    components: {
      [NavBar.name]: NavBar,
      [Form.name]: Form,
      [Field.name]: Field,
      [Button.name]: Button,
    },

    data() {
      return {
        oldTarget: 1000,
        newTarget: '',
      };
    },

    created() {
      const userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;
      api
        .get('/mobile/getNewTarget', {
          params: {
            user_id: userInfo_userId,
          },
        })
        .then(res => {
          if (res.data.code === 0) {
            if (res.data.data.length === 0) {
              // 啥事不用做
            } else {
              this.oldTarget = res.data.data[0].target;
            }
          }
        });
    },

    methods: {
      setNewTarget() {
        const userInfo_userId = JSON.parse(cookie.get('jscookieTest')).user_id;

        api.post('/mobile/setNewTarget', {
          user_id: userInfo_userId,
          target: this.newTarget,
        });
      },

      onClickLeft() {
        this.$router.back();
      },

      onClickRight() {},
    },
  };
</script>
