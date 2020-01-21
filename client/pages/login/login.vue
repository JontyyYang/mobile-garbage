<!--
 * @Author: jontyy
 * @Date: 2020-01-20 16:52:02
 * @Description:登录注册页面
 -->

<template>
  <!-- 为了避免过多判断，所以这里写了if-else，如果不怕判断的话，下面两个可以抽象成一个的 -->
  <div class="login-container" v-if="currentStatus === status.Login">
    <div class="login">
      <form>
        <van-cell-group v-for="item in UserInfo" :key="item.modelName">
          <van-field
            v-model="userInfo[item.modelName]"
            :placeholder="item.placeholder"
            :label="item.label"
            :size="item.size"
            :type="item.type"
            :maxlength="item.maxlength"
            :right-icon="item.rightIcon"
            @click-right-icon="clear(item.modelName, status.Login)"
          />
        </van-cell-group>
      </form>
      <van-button round type="info" class="login-button" block>点我登录</van-button>
    </div>
    <div class="toRegister" @click="jumpToRegister">没有账号？点我注册</div>
  </div>
  <div class="register-container" v-else>
    <div class="register">
      <form>
        <van-cell-group v-for="item in RegisterInfo" :key="item.modelName">
          <van-field
            v-model="registerInfo[item.modelName]"
            :placeholder="item.placeholder"
            :label="item.label"
            :size="item.size"
            :type="item.type"
            :maxlength="item.maxlength"
            :right-icon="item.rightIcon"
            @click-right-icon="clear(item.modelName, status.Register)"
          />
        </van-cell-group>
      </form>
      <van-button round type="info" class="register-button" block>点我注册</van-button>
    </div>
    <div class="toLogin" @click="jumpToLogin">返回登录页面</div>
  </div>
</template>

<script>
import { Field, CellGroup, Button } from 'vant';
import { UserInfo, RegisterInfo } from './userStateInfo';

const status = {
  Login: 'login',
  Register: 'register',
};

export default {
  name: 'Login',
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
  },
  data() {
    return {
      // 用户信息
      userInfo: {
        userPhone: '',
        userPassword: '',
      },

      // 注册信息
      registerInfo: {
        userName: '',
        userPhone: '',
        userPassword: '',
        userCurrentPassword: '',
        userAge: '',
        userNickname: '',
        userSex: '',
      },

      // 注册所需要的信息
      RegisterInfo,
      // 登录需要的用户信息
      UserInfo,

      // 登录还是注册
      status,
      currentStatus: status.Login,
    };
  },
  methods: {
    clear(e, type) {
      switch (type) {
        case status.Login:
          this.userInfo[e] = '';

          break;
        case status.Register:
          this.registerInfo[e] = '';

          break;
        default:
          break;
      }
    },

    jumpToRegister() {
      this.currentStatus = this.status.Register;
    },

    jumpToLogin() {
      this.currentStatus = this.status.Login;
    },
  },
};
</script>

<style lang="scss" scoped>
$highlight-color: #f90;
$base-url: '../../lib-img/';

.login-container {
  background: url($base-url+'bg.jpg') no-repeat 100% 100%;
}

.register-container {
  background: url($base-url+'register.jpg') no-repeat 100% 100%;
}

.login-container,
.register-container {
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
}

.login,
.register {
  @include pos-to-center;

  width: 4rem /* 300/75 */;

  &-button {
    margin: 0.2rem /* 15/75 */ auto 0;
    width: 2.666667rem; /* 200/75 */
  }
}

.toRegister,
.toLogin {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #323232;
}

.toLogin {
  color: #fff;
}
</style>
