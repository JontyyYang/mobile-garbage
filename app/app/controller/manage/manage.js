'use strict';

const { Controller } = require('egg');

const LoginType = {
  ACCOUNT: 'account',
  MOBILE: 'mobile',
};

class ManageController extends Controller {
  // 通过管理者名字找到管理者
  async findByManageName(manageName) {
    const { ctx } = this;
    const manage = await ctx.service.manage.manage.findByManageName(manageName);
    return manage;
  }

  async findByManageMobile(manageMobile) {
    const { ctx } = this;
    const manage = await ctx.service.manage.findByManageMobile(manageMobile);
    return manage;
  }

  async login() {
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const { type, mobile = '', captcha = '', userName = '', password = '' } = body.data;
    let data = {},
      code = 0,
      message = '登录成功';
    if (type === LoginType.ACCOUNT) {
      data = await this.findByManageName(userName);
      if (password !== data.manage_password) {
        code = -1;
        message = '登录失败';
      }
    } else {
      data = await this.findByManageMobile(mobile);
      if (captcha !== data.manage_captcha) {
        code = -1;
        message = '登录失败';
      }
    }

    ctx.body = { code, data, message };
  }
}

module.exports = ManageController;
