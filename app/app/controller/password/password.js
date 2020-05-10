/*
 * @Author: jontyy
 * @Date: 2020-05-10 16:18:49
 * @Description:
 */

'use strict';

const { Controller } = require('egg');
const { output } = require('../../../constant');

class passwordController extends Controller {
  async resetPassword() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body },
      },
    } = this;
    const { oldPassword, passwordone, user_id } = body;
    // 比对原来的密码是否相同
    const userInfo = await ctx.service.user.user.findById(user_id);
    let finalRes;
    if (userInfo.user_password === oldPassword) {
      finalRes = await ctx.service.user.user.updateUser({
        user_password: passwordone,
        user_id,
      });
    }
    if (finalRes) {
      finalData.data = finalRes;
      finalData.message = '更新密码成功';
    } else {
      finalData.code = -1;
      finalData.data = finalRes;
      finalData.message = '更新密码失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }
}

module.exports = passwordController;
