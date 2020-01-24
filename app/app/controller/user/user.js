'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const uid = 1;
    const user = await ctx.service.user.user.find(uid);
    ctx.body = user;
  }

  // 注册函数
  async register() {
    const {
      ctx: {
        request: { body: body },
      },
    } = this;
    // 判断各个选项的长度。判断手机号校验判断是否已经有账号
    const { userName, userNickname, userPassword, userPhone } = body;
    console.log(userName, userNickname, userPassword, userPhone);
    this.ctx.body = {
      code: 0,
      data: body,
    };
  }
}

module.exports = UserController;
