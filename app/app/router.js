'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/user/user', controller.user.user.findByTel);
  router.get('/user/login', controller.user.user.login);
  router.post('/user/register', controller.user.user.register);
};
