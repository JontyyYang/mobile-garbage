'use strict';

const { Controller } = require('egg');

const { output } = require('../../../constant');

class Good extends Controller {
  async addGood() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const result = await ctx.service.good.good.addGood(body.data);
    if (result) {
      finalData.data = result;
      finalData.message = '新增商品成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '新增商品失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async getGood() {
    const finalData = output();
    const { ctx } = this;
    const result = await ctx.service.good.good.getGood();
    if (result) {
      finalData.data = result;
      finalData.message = '查询商品成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '查询商品失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }
}

module.exports = Good;
