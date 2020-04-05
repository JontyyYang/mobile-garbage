'use strict';

const { Controller } = require('egg');
const { output } = require('../../../constant');
const { pick } = require('lodash');

class SwiperController extends Controller {
  async getImg() {
    const { ctx } = this;
    let code = 0;
    const cookie = JSON.parse(
      ctx.cookies.get('userInfo', {
        signed: true,
        encrypt: true,
      }),
    );
    const userShowInfo = pick(cookie, ['user_nickname', 'user_ava']);
    const imgData = await ctx.service.swiper.swiper.getImg();
    if (!imgData) {
      code = -1;
    }
    ctx.body = { imgData, code, userShowInfo };
  }

  async addImg() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const { url } = body.data;
    const result = await ctx.service.swiper.swiper.addImg({
      url,
    });
    if (result) {
      finalData.data = result;
      finalData.message = '新增广告成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '新增广告失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async deleteImg() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const result = await ctx.service.swiper.swiper.deleteImg({
      swiper_id: body.data,
    });
    if (result) {
      finalData.data = result;
      finalData.message = '删除广告成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '删除广告失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async editSwiper() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const { url, img_id } = body.data;
    const result = await ctx.service.swiper.swiper.editSwiper({
      url,
      img_id,
    });
    if (result) {
      finalData.data = result;
      finalData.message = '编辑广告成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '编辑广告失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }
}

module.exports = SwiperController;
