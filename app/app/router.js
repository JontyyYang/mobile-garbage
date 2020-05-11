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

  // 增加用户地址接口
  router.post('/user/addArea', controller.user.user.addArea);
  // 获取用户地址接口
  router.get('/user/getArea', controller.user.user.getArea);
  // 获取某一个地址的信息信息
  router.get('/user/getOneArea', controller.user.user.getOneArea);
  // 获取用户的地址信息
  router.get('/user/getOneAreaById', controller.user.user.getOneAreaById);
  // 更新某一个地址信息
  router.post('/user/updateArea', controller.user.user.updateArea);

  // 设置时间
  router.post('/time/updateTime', controller.time.time.updateTime);
  // 获取时间
  router.get('/time/getTime', controller.time.time.getTime);

  // 重设密码
  router.post('/password/resetPassword', controller.password.password.resetPassword);

  // 呼叫服务
  router.post('/askOrder', controller.askOrder.askOrder.askOrder);
  // 查看待接单信息
  router.get('/waitOrder', controller.askOrder.askOrder.waitOrder);
  // 查看已接单信息
  router.get('/ordered', controller.askOrder.askOrder.ordered);
  // 接单
  router.post('/sureOrder', controller.askOrder.askOrder.sureOrder);
  // 获取某个用户的订单信息
  router.get('/getOrderByUser', controller.askOrder.askOrder.getOrderByUser);

  // 完成订单
  router.post('/giveMoney', controller.money.money.setMoney);
  // 查看用户所有金额
  router.get('/getMoney', controller.money.money.getMoney);

  // 获取用户目标
  router.get('/getNewTarget', controller.money.money.getNewTarget);
  // 设置用户目标
  router.post('/setNewTarget', controller.money.money.setNewTarget);
};
