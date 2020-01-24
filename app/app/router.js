'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/user/user', controller.user.user.index);
  router.post('/user/register', controller.user.user.register);
};
