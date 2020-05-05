'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async find(utel) {
    const user = await this.app.mysql.get('user_info', { user_phone: utel });
    return user;
  }

  async findById(uId) {
    const user = await this.app.mysql.get('user_info', { user_id: uId });
    return user;
  }

  async createUser(userName, userNickname, userPassword, userPhone) {
    const result = await this.app.mysql.insert('user_info', {
      user_name: userName,
      user_nickname: userNickname,
      user_password: userPassword,
      user_phone: userPhone,
    });
    return result;
  }

  async updateUser(value) {
    const { user_id } = value;
    const result = await this.app.mysql.update('user_info', value, { where: { user_id } });
    return result.affectedRows === 1;
  }
}

module.exports = UserService;
