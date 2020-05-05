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

  async deleteGood(data) {
    const result = await this.app.mysql.delete('good_info', {
      good_id: data,
    });
    return result.affectedRows === 1;
  }

  async getOneGood(good_id) {
    const result = await this.app.mysql.get('good_info', { good_id });
    return result;
  }

  async updateGoods(data) {
    const { goodsImg, goodsName, goodsNum, goodsPrice, goodsInfo, goodsId } = data;
    const result = await this.app.mysql.update(
      'good_info',
      {
        good_img: goodsImg,
        good_name: goodsName,
        good_num: goodsNum,
        good_price: goodsPrice,
        good_info: goodsInfo,
      },
      {
        where: {
          good_id: goodsId,
        },
      },
    );
    return result.affectedRows === 1;
  }
}

module.exports = GoodServive;
