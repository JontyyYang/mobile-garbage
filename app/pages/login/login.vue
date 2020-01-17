<template>
  <div class="login-container" v-if="currentStatus === status.Login">
    <div class="login">
      <form>
        <van-cell-group>
          <van-field
            v-model="userInfo.userPhone"
            placeholder="请输入手机号"
            label="手机号"
            size="large"
            maxlength="11"
            right-icon="close"
            @click-right-icon="clear('userPhone')"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="userInfo.userPassword"
            placeholder="请输入密码"
            type="password"
            label="密码"
            size="large"
            maxlength="6"
            right-icon="close"
            @click-right-icon="clear('userPassword')"
          />
        </van-cell-group>
      </form>
    </div>
    <div class="toRegister" @click="jumpToRegister">没有账号？点我注册</div>
  </div>
  <div class="register-container" v-else>
    <div class="register">123</div>
    <!-- <div class="login">
      <form>
        <van-cell-group>
          <van-field
            v-model="userInfo.userPhone"
            placeholder="请输入手机号"
            label="手机号"
            size="large"
            maxlength="11"
            right-icon="close"
            @click-right-icon="clear('userPhone')"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="userInfo.userPassword"
            placeholder="请输入密码"
            type="password"
            label="密码"
            size="large"
            maxlength="6"
            right-icon="close"
            @click-right-icon="clear('userPassword')"
          />
        </van-cell-group>
      </form>
    </div> -->
  </div>
</template>

<script>
import { Field, CellGroup } from 'vant';

const status = {
  Login: 'login',
  Register: 'register',
};

export default {
  name: 'Login',
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
  },
  data() {
    return {
      // 用户信息
      userInfo: {
        userPhone: '',
        userPassword: '',
      },
      status,
      // 登录还是注册
      currentStatus: status.Login,
    };
  },
  methods: {
    clear(e) {
      this.userInfo[e] = '';
    },
    jumpToRegister() {
      this.currentStatus = this.status.Register;
    },
  },
};
</script>

<style lang="scss" scoped>
  $highlight-color: #f90;
  $base-url: '../../lib-img/';

  .login-container {
    height: 100%;
    width: 100%;
    background: url($base-url+'bg.jpg') no-repeat 100% 100%;
    background-size: 100% 100%;

    .login {
      @include pos-to-center;

      width: 4rem /* 300/75 */;
    }

    .toRegister {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: #323232;
    }
  }

  .register-container {
    height: 100%;
    width: 100%;
    background: url($base-url+'register.jpg') no-repeat 100% 100%;
    background-size: 100% 100%;

    .register {
      @include pos-to-center;
    }
  }
</style>
