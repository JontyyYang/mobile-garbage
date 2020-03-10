'use strict';
const { Service } = require('egg');

class NewsListService extends Service {
  async addNewsList(data) {
    const { title, writename, picurl, info } = data;
    const time = new Date();
    const result = await this.app.mysql.insert('news_info', {
      news_title: title,
      news_writename: writename,
      news_picurl: picurl,
      news_info: info,
      news_time: time,
    });
    return result.affectedRows === 1;
  }

  async getNewsList() {
    const result = await this.app.mysql.select('news_info');
    return result;
  }

  async deleteNewsList(data) {
    const row = {
      id: data,
      is_delete: 1,
    };
    const result = await this.app.mysql.update('news_info', row);
    return result.affectedRows === 1;
  }
}
module.exports = NewsListService;
