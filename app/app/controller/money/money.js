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

  async getMoney() {
    const finalData = output();
    const {
      ctx,
      ctx: { query },
    } = this;
    const result = await ctx.service.money.money.getMoney(query);
    if (result) {
      finalData.data = result;
      finalData.message = '查询金额成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '查询金额失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async getNewTarget() {
    const finalData = output();
    const {
      ctx,
      ctx: { query },
    } = this;

    const result = await ctx.service.money.money.getNewTarget(query);
    if (result) {
      finalData.data = result;
      finalData.message = '获取目标成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '获取目标失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async setNewTarget() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body },
      },
    } = this;

    const result = await ctx.service.money.money.setNewTarget(body);
    if (result) {
      finalData.data = result;
      finalData.message = '设置目标成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '设置目标失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }
}

module.exports = moneyController;
