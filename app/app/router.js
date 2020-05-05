'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 通过电话查用户
  router.get('/user/user', controller.user.user.findByTel);
  // 通过id查用户
  router.get('/user/getUser', controller.user.user.findById);
  // 用户登录接口
  router.get('/user/login', controller.user.user.login);
  // 用户注册接口
  router.post('/user/register', controller.user.user.register);
  // 用户信息更新接口
  router.post('/user/updateUser', controller.user.user.updateUser);

  // 获取轮播图接口
  router.get('/swiper/img', controller.swiper.swiper.getImg);
  // 管理端获取轮播图接口， 不应该这样写的。。 但是一开始的架构有问题， 导致移动端是有用户数据的，
  //  但是客户端是没有的， 用同一个接口会报错
  router.get('/swiper/getPcImg', controller.swiper.swiper.getPcImg);

  // 增加轮播图接口
  router.post('/swiper/addSwiper', controller.swiper.swiper.addImg);
  // 删除轮播图接口
  router.post('/swiper/deleteSwiper', controller.swiper.swiper.deleteImg);
  // 编辑轮播图接口
  router.post('/swiper/editSwiper', controller.swiper.swiper.editSwiper);

  // 管理端登录界面
  router.post('/manage/manage', controller.manage.manage.login);

  // 管理端增加新闻接口
  router.post('/newsList/addNewlist', controller.newsList.newsList.addNewsList);
  // 管理端查找新闻接口
  router.get('/newsList/getNewList', controller.newsList.newsList.getNewsList);
  // 管理端删除某个新闻
  router.post('/newsList/deleteNews', controller.newsList.newsList.deleteNewsList);
  // 根据新闻id查新闻
  router.get('/newsList/getNews', controller.newsList.newsList.getNews);

  // 管理端增加商品接口
  router.post('/good/addGoods', controller.good.good.addGood);
  // 查询商品接口
  router.get('/good/getGoods', controller.good.good.getGood);
  // 删除某商品的接口
  router.post('/good/deleteGoods', controller.good.good.deleteGood);
  // 获取单个商品接口
  router.get('/good/getOneGood', controller.good.good.getOneGood);
  // 更新商品接口
  router.post('/good/updateGoods', controller.good.good.updateGoods);
};
