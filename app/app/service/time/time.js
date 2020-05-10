'use strict';

const { Service } = require('egg');

class timeService extends Service {
  async updateTime({ user_id, time }) {
    const data = await this.getTime(user_id);
    let result = null;
    if (data) {
      result = await this.app.mysql.update(
        'user_time',
        {
          user_time: time,
        },
        {
          where: {
            user_id,
          },
        },
      );
    } else {
      result = await this.app.mysql.insert('user_time', {
        user_id,
        user_time: time,
      });
    }
    return result;
  }

  async getTime(user_id) {
    const result = await this.app.mysql.get('user_time', { user_id });
    return result;
  }
}

module.exports = timeService;
