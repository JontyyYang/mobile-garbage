'use strict';
module.exports = () => {
  // 2、返回一个异步的函数
  return async function login(ctx, next) {
    ctx.set('Access-Control-Allow-Credentials', true);
    // 需要过滤某些端口

    // const cookie = ctx.cookies.get('username', {
    //   signed: true,
    //   encrypt: true,
    // });
    // if (!cookie) {
    //   const code = -100,
    //     message = '用户没有登录';
    //   ctx.body = { code, message };

    //   return;
    // }
    await next();
  };
};
