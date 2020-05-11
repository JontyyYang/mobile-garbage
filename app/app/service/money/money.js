/*
 * @Author: jontyy
 * @Date: 2020-05-11 16:36:38
 * @Description:
 */
/*
 * @Author: jontyy
 * @Date: 2020-05-11 10:12:14
 * @Description:
 */

'use strict';

const { Service } = require('egg');

class moneyService extends Service {
  async setMoney({ money, user_id, order_id, orderId }) {
    const result = await this.app.mysql.insert('money_info', {
      money,
      user_id,
      order_id,
      orderId,
    });
    return result;
  }
}

module.exports = moneyService;
