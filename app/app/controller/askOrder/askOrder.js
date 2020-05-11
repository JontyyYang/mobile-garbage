/*
 * @Author: jontyy
 * @Date: 2020-05-11 09:54:01
 * @Description:
 */
'use strict';

const { Controller } = require('egg');

const { output } = require('../../../constant');

class askOrderController extends Controller {
  async askOrder() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const result = await ctx.service.askOrder.askOrder.askOrder(body);
    if (result) {
      finalData.data = result;
      finalData.message = '发起服务请求成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '发起服务请求失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async waitOrder() {
    const finalData = output();
    const { ctx } = this;
    const result = await ctx.service.askOrder.askOrder.waitOrder();
    if (result) {
      finalData.data = result;
      finalData.message = '查询待接单请求成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '查询待接单请求失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async ordered() {
    const finalData = output();
    const { ctx } = this;
    const result = await ctx.service.askOrder.askOrder.ordered();
    if (result) {
      finalData.data = result;
      finalData.message = '查询待接单请求成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '查询待接单请求失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async sureOrder() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const result = await ctx.service.askOrder.askOrder.sureOrder(body);
    if (result) {
      finalData.data = result;
      finalData.message = '接单成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '接单失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async getOrderByUser() {
    const finalData = output();
    const {
      ctx,
      ctx: { query },
    } = this;
    const result = await ctx.service.askOrder.askOrder.getOrderByUser(query);
    if (result) {
      finalData.data = result;
      finalData.message = '查询订单成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '查询订单失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }
}

module.exports = askOrderController;
