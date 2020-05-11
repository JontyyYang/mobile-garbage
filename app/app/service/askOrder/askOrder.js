/*
 * @Author: jontyy
 * @Date: 2020-05-11 10:12:14
 * @Description:
 */

'use strict';

const { Service } = require('egg');

class timeService extends Service {
  async askOrder({ user_id, order_time, status }) {
    const result = await this.app.mysql.insert('order_info', {
      user_id,
      order_time,
      status,
    });
    return result;
  }

  async waitOrder() {
    const result = await this.app.mysql.select('order_info', {
      where: {
        status: 1,
      },
    });
    return result;
  }

  async ordered() {
    const result = await this.app.mysql.select('order_info', {
      where: {
        status: 0,
      },
    });
    return result;
  }

  async sureOrder({ id }) {
    const result = await this.app.mysql.update(
      'order_info',
      {
        status: 0,
      },
      {
        where: {
          id,
        },
      },
    );
    return result;
  }

  async deleteOrder(id) {
    console.log(id);
    const result = await this.app.mysql.update(
      'order_info',
      {
        status: -1,
      },
      {
        where: {
          id,
        },
      },
    );
    return result;
  }
}

module.exports = timeService;
