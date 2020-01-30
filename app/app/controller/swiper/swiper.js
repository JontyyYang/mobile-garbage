'use strict';

const { Controller } = require('egg');

class SwiperController extends Controller {
  async getImg() {
    const { ctx } = this;
    const imgData = await ctx.service.swiper.swiper.getImg();
    ctx.body = imgData;
  }
}

module.exports = SwiperController;
