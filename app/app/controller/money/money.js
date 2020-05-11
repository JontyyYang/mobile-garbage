'use strict';

const { Controller } = require('egg');
const { output } = require('../../../constant');

class moneyController extends Controller {
  async setMoney() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body },
      },
    } = this;
    const result = await ctx.service.money.money.setMoney(body);
    await ctx.service.askOrder.askOrder.deleteOrder(body.orderId);
    if (result) {
      finalData.data = result;
      finalData.message = '付款成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '付款失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }
}

module.exports = moneyController;
