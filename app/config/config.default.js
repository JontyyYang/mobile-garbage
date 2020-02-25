/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  // eslint-disable-next-line
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1579574947481_5941';

  // add your middleware config here
  config.middleware = ['login']; //eslint-disable-line

  // 这里是关闭了csrf校验，是不合理的，上到服务器必须弄成正确的
  config.security = {
    csrf: {
      // headerName: 'x-csrf-token',
      enable: false,
    },
    // eslint-disable-next-line
    domainWhiteList: ['http://127.0.0.1:8080', 'http://127.0.0.1:8000'],
    // domainWhiteList: ['*'],
  };

  config.cors = {
    domainWhiteList: {
      origin: ['http://127.0.0.1:8080', 'http://127.0.0.1:8000'],
      // origin: '*',
      credentials: true,
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
  };

  config.mysql = {
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '199798',
      // 数据库名
      database: 'garbage',
    },
    app: true,
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
