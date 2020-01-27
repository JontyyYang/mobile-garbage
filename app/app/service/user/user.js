'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async find(utel) {
    const user = this.app.mysql.get('user_info', { user_phone: utel });
    return user;
  }

  async createUser(userName, userNickname, userPassword, userPhone) {
    const result = this.app.mysql.insert('user_info', {
      user_name: userName,
      user_nickname: userNickname,
      user_password: userPassword,
      user_phone: userPhone,
    });
    return result;
  }
}

module.exports = UserService;
