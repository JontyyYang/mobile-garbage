'use strict';
const { Service } = require('egg');

class SwiperService extends Service {
  async getImg() {
    const imgData = this.app.mysql.select('swiper_img');
    return imgData;
  }

  async addImg(url) {
    const { url: img_src } = url;
    const result = await this.app.mysql.insert('swiper_img', {
      img_src,
    });
    return result.affectedRows === 1;
  }

  async deleteImg(data) {
    const { swiper_id } = data;
    const result = await this.app.mysql.delete('swiper_img', {
      img_id: swiper_id,
    });
    return result.affectedRows === 1;
  }

  async editSwiper(url) {
    const { url: img_src, img_id } = url;
    const result = await this.app.mysql.update(
      'swiper_img',
      {
        img_src,
      },
      {
        where: {
          img_id,
        },
      },
    );
    return result.affectedRows === 1;
  }
}

module.exports = SwiperService;
