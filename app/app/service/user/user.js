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

  async addArea(value) {
    const {
      addressDetail,
      areaCode,
      city,
      country,
      county,
      isDefault,
      name,
      postalCode,
      province,
      tel,
      userInfo_userId,
    } = value;
    const result = await this.app.mysql.insert('user_address', {
      addressDetail,
      areaCode,
      city,
      country,
      county,
      isDefault,
      name,
      postalCode,
      province,
      tel,
      user_id: userInfo_userId,
    });
    return result;
  }

  async getArea(userId) {
    const result = await this.app.mysql.select('user_address', {
      where: { user_id: userId },
    });
    return result;
  }

  async getOneArea(area_id) {
    const result = await this.app.mysql.get('user_address', { id: area_id });
    return result;
  }

  async updateArea(value) {
    const {
      addressDetail,
      areaCode,
      city,
      country,
      county,
      isDefault,
      name,
      postalCode,
      province,
      tel,
      userInfo_userId,
      id,
    } = value;
    const result = await this.app.mysql.update(
      'user_address',
      {
        addressDetail,
        areaCode,
        city,
        country,
        county,
        isDefault,
        name,
        postalCode,
        province,
        tel,
        user_id: userInfo_userId,
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

module.exports = UserService;
