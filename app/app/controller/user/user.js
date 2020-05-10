'use strict';

const { Controller } = require('egg');
const { output } = require('../../../constant');

class UserController extends Controller {
  // 查找用户
  async findByTel(userPhone) {
    const { ctx } = this;
    const user = await ctx.service.user.user.find(userPhone);
    return user;
  }

  async findById() {
    const finalData = output();
    const {
      ctx,
      ctx: { query },
    } = this;
    const { userId } = query;
    const result = await ctx.service.user.user.findById(userId);
    if (result) {
      finalData.data = result;
      finalData.message = '查询单个商品成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '查询单个商品失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  // 登录函数
  async login() {
    const {
      ctx,
      ctx: { query },
    } = this;
    const { userPhone, userPassword } = query;
    let code = 0,
      message = '登录成功',
      body = {};
    const res = await this.findByTel(userPhone);
    if (!res) {
      code = -1;
      message = '用户不存在，请去往登录页面';
    } else if (userPassword !== res.user_password) {
      code = -1;
      message = '密码错误';
    } else {
      body = res;
    }
    ctx.cookies.set('userInfo', JSON.stringify(res), {
      maxAge: 1 * 3600 * 1000,
      httpOnly: true,
      signed: true,
      encrypt: true,
      domain: '127.0.0.1',
    });
    // 这样会导致其他页面传递不带cookie，在middleware中设置就可以避免没一个请求都加上这一句话了
    // ctx.set('Access-Control-Allow-Credentials', true);
    ctx.body = { code, body, message };
  }

  // 注册函数
  async register() {
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    // 判断各个选项的长度。判断手机号校验判断是否已经有账号
    const { userName, userNickname, userPassword, userPhone } = body;
    let code = 0,
      message = '注册成功';
    if (userName.length < 2 || userName.length > 11) {
      code = -1;
      message = '用户名长度必须在2-11个字符之间';
    } else if (userNickname.length < 2 || userNickname.length > 11) {
      code = -1;
      message = '用户昵称长度必须在2-11个字符之间';
    } else if (userPhone.length !== 11 || !/^1[3456789]\d{9}$/.test(userPhone)) {
      code = -1;
      message = '手机号不符合规范';
    }
    const user = await ctx.service.user.user.find(userPhone);
    if (user !== null) {
      code = -1;
      message = '该手机号已经注册，请换一个手机号注册';
    } else {
      await ctx.service.user.user.createUser(userName, userNickname, userPassword, userPhone);
    }

    this.ctx.body = {
      code,
      data: body,
      message,
    };
  }

  async updateUser() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const result = await ctx.service.user.user.updateUser(body.value);
    if (result) {
      finalData.data = result;
      finalData.message = '更新用户信息成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '更新用户信息失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  // 增加地址信息
  async addArea() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const result = await ctx.service.user.user.addArea(body);
    if (result) {
      finalData.data = result;
      finalData.message = '增加用户地址信息成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '增加用户地址信息失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async getArea() {
    const finalData = output();
    const {
      ctx,
      ctx: { query },
    } = this;
    const { user_id: userId } = query;
    const result = await ctx.service.user.user.getArea(userId);
    if (result) {
      finalData.data = result;
      finalData.message = '查询地址成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '查询地址失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async getOneArea() {
    const finalData = output();
    const {
      ctx,
      ctx: { query },
    } = this;
    const { area_id } = query;
    const result = await ctx.service.user.user.getOneArea(area_id);
    if (result) {
      finalData.data = result;
      finalData.message = '查询单个地址成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '查询单个地址失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async updateArea() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const result = await ctx.service.user.user.updateArea(body);
    if (result) {
      finalData.data = result;
      finalData.message = '增加用户地址信息成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '增加用户地址信息失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }
}

module.exports = UserController;
