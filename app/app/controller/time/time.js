'use strict';

const { Controller } = require('egg');
const { output } = require('../../../constant');

class timeController extends Controller {
  async updateTime() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body },
      },
    } = this;
    const result = await ctx.service.time.time.updateTime(body);
    if (result) {
      finalData.data = result;
      finalData.message = '增加时间成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '增加失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async getTime() {
    const finalData = output();
    const {
      ctx,
      ctx: { query },
    } = this;

    const result = await ctx.service.time.time.getTime(query.user_id);
    if (result) {
      finalData.data = result;
      finalData.message = '获取时间成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '获取时间失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }
}

module.exports = timeController;
