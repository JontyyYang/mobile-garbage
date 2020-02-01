'use strict';
module.exports = () => {
  return async function login(ctx, next) {
    ctx.set('Access-Control-Allow-Credentials', true);
    if (!ctx.request.url.startsWith('/user/login')) {
      const cookie = ctx.cookies.get('userInfo', {
        signed: true,
        encrypt: true,
      });
      if (!cookie) {
        const code = -100,
          message = '用户没有登录';
        ctx.body = { code, message };

        return;
      }
    }
    await next();
  };
};
