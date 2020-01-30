'use strict';
const { Service } = require('egg');

class SwiperService extends Service {
  async getImg() {
    const imgData = this.app.mysql.select('swiper_img');
    return imgData;
  }
}

module.exports = SwiperService;
