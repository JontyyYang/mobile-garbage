'use strict';

const { Service } = require('egg');

class ManageService extends Service {
  async findByManageName(manageName) {
    const manage = this.app.mysql.get('manage_info', { manage_name: manageName });
    return manage;
  }

  async findByManageMobile(manageMobile) {
    const manage = this.app.mysql.get('manage_info', { manage_phone: manageMobile });
    return manage;
  }
}

module.exports = ManageService;
