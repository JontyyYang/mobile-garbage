'use strict';

const { Controller } = require('egg');
const { output } = require('../../../constant');

class NewsList extends Controller {
  async addNewsList() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const { title, writename, info } = body.data;
    let { picurl } = body.data;
    if (picurl === '图片地址') {
      picurl = '';
    }
    const result = await ctx.service.newsList.newsList.addNewsList({
      title,
      writename,
      picurl,
      info,
    });
    if (result) {
      finalData.data = result;
      finalData.message = '新增新闻成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '新增新闻失败， 错误结果未知，请重试';
    }
    ctx.body = finalData;
  }

  async getNewsList() {
    const finalData = output();
    const { ctx } = this;
    const result = await ctx.service.newsList.newsList.getNewsList();
    finalData.data = result;
    finalData.message = '获取数据成功';
    ctx.body = finalData;
  }

  async deleteNewsList() {
    const finalData = output();
    const {
      ctx,
      ctx: {
        request: { body: body },
      },
    } = this;
    const data = body.data;
    const result = await ctx.service.newsList.newsList.deleteNewsList(data);
    if (result) {
      const data = await ctx.service.newsList.newsList.getNewsList();
      finalData.data = data;
      finalData.message = '删除新闻成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '删除新闻失败，请重试';
    }
    ctx.body = finalData;
  }

  async getNews() {
    const finalData = output();
    const {
      ctx,
      ctx: { query },
    } = this;
    const { newsId } = query;
    const result = await ctx.service.newsList.newsList.getNews(newsId);
    if (result) {
      finalData.data = result;
      finalData.message = '查询具体新闻成功';
    } else {
      finalData.code = -1;
      finalData.data = result;
      finalData.message = '查询新闻失败，请重试';
    }
    ctx.body = finalData;
  }
}
module.exports = NewsList;
