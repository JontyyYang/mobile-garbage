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
      <van-button round type="info" class="login-button" block @click="loginAction"
        >点我登录</van-button
      >
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
      <van-button round type="info" class="register-button" block @click="registerAction"
        >点我注册</van-button
      >
    </div>
    <div class="toLogin" @click="jumpToLogin">返回登录页面</div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  import { Field, CellGroup, Button, Notify } from 'vant';
  import md5 from 'js-md5';

  import api from 'libjs/api';
  import { validatorLength, validatorTel } from 'libjs/util';

  import { UserInfo, RegisterInfo } from './userStateInfo';

  const { mapState: mapUserState, mapActions: mapUserActions } = createNamespacedHelpers('user');

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
      [Notify.name]: Notify,
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
          userNickname: '',
          userPhone: '',
          userPassword: '',
          userCurrentPassword: '',
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
    computed: {
      ...mapUserState(['user_info']),
    },
    methods: {
      ...mapUserActions(['setUserInfo']),

      // 清空当前输入框
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

      // 跳转至注册页
      jumpToRegister() {
        this.currentStatus = this.status.Register;
      },

      // 跳转至登录页
      jumpToLogin() {
        this.currentStatus = this.status.Login;
      },

      // 登录操作
      loginAction() {
        const {
          userInfo,
          userInfo: { userPhone, userPassword },
        } = this;
        const password = md5(userPassword);
        if (!validatorTel(userPhone)) {
          Notify('手机号不符合规范');
          return;
        }
        if (!validatorLength(userPassword, 'range', 8, 16)) {
          Notify('密码长度不正确');
          return;
        }
        api
          .get('/user/login', {
            params: {
              userPhone,
              userPassword: password,
            },
            // 需要把cookie待过去,现在在apijs里面统一处理
            // withCredentials: true,
          })
          .then(res => {
            if (res.data.code !== 0) {
              Notify(res.data.message);
              return;
            }
            let storage = window.localStorage;
            storage.setItem('userPhone', userPhone);
            this.setUserInfo(JSON.stringify(res.data.body));
            this.$router.replace('/home');
          });
      },

      // 注册操作
      registerAction() {
        const {
          registerInfo: { userName, userNickname, userPhone, userPassword, userCurrentPassword },
        } = this;

        // 想了想，前端这里还是要处理的， 不想什么都丢给后端，前端这里要判定是否为空， 密码是否相等
        const tempArr = [
          {
            value: userName,
            name: '请输入用户名哦(*╹▽╹*)',
          },
          {
            value: userNickname,
            name: '请输入昵称哦(*╹▽╹*)',
          },
          {
            value: userPhone,
            name: '请输入电话号码哦(*╹▽╹*)',
          },
          {
            value: userPassword,
            name: '请输入密码哦(*╹▽╹*)',
          },
          {
            value: userCurrentPassword,
            name: '请确认密码哦(*╹▽╹*)',
          },
        ];

        // 遍历提示，避免挨个
        for (let i = 0, j = tempArr.length; i !== j; i++) {
          if (!tempArr[i].value) {
            Notify(tempArr[i].name);
            return;
          }
        }

        if (userPassword !== userCurrentPassword) {
          Notify('两次密码必须要一致哦');
          return;
        }

        if (!validatorLength(userPassword, 'range', 8, 16)) {
          Notify('密码长度不正确');
          return;
        }

        // md5加密
        const password = md5(userPassword);

        api
          .post('/user/register', {
            userName,
            userNickname,
            userPhone,
            userPassword: password,
          })
          .then(res => {
            if (res.data.code !== 0) {
              Notify(res.data.message);
            }
            Notify('注册成功，3s后回到注册页面');
            setTimeout(() => {
              this.currentStatus = status.Login;
            }, 3000);
          });
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
