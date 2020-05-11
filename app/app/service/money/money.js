/*
 * @Author: jontyy
 * @Date: 2020-05-11 16:36:38
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

  async getMoney({ user_id }) {
    const result = await this.app.mysql.select('money_info', {
      where: {
        user_id,
      },
    });
    return result;
  }

  async getNewTarget({ user_id }) {
    const result = await this.app.mysql.select('target_info', {
      where: {
        user_id,
      },
    });
    return result;
  }
  async setNewTarget({ user_id, target }) {
    const result = await this.app.mysql.insert('target_info', {
      user_id,
      target,
    });
    return result;
  }
}

module.exports = moneyService;
