'use strict';

const { Service } = require('egg');

class GoodServive extends Service {
  async addGood(data) {
    const { goodsImg, goodsName, goodsNum, goodsPrice, goodsInfo } = data;
    const result = await this.app.mysql.insert('good_info', {
      good_img: goodsImg,
      good_name: goodsName,
      good_num: goodsNum,
      good_price: goodsPrice,
      good_info: goodsInfo,
    });
    return result.affectedRows === 1;
  }
  async getGood() {
    const result = await this.app.mysql.select('good_info');
    return result;
  }
}

module.exports = GoodServive;
