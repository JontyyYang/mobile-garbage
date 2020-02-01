'use strict';

const { Controller } = require('egg');
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
}

module.exports = SwiperController;
