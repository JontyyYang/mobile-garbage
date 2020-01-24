'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async find(uid) {
    const user = this.app.mysql.get('user_info', { user_id: uid });
    console.log(user);
    return user;
  }
}

module.exports = UserService;
