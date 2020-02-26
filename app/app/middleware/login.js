'use strict';
module.exports = () => {
  return async function login(ctx, next) {
    ctx.set('Access-Control-Allow-Credentials', true);
    if (
      !ctx.request.url.startsWith('/user/login') &&
      !ctx.request.url.startsWith('/manage/manage')
    ) {
      const cookie = ctx.cookies.get('userInfo', {
        signed: true,
        encrypt: true,
      });
      const pcCookie = ctx.cookies.get('manageInfo', {
        signed: false,
        encrypt: false,
      });
      if (!cookie || pcCookie) {
        const code = -100,
          message = '用户没有登录';
        ctx.body = { code, message };

        return;
      }
    }
    await next();
  };
};
