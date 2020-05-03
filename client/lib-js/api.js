/*
 * @Author: jontyy
 * @Date: 2020-01-22 10:03:31
 * @Description:封装axios，设置默认端口，记得开发要下载谷歌跨域插件，要不然不行
 */

const axios = require('axios');

function getCookie(name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
}

const api = axios.create({
  // baseURL: 'http://127.0.0.1:7001/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  withCredentials: true,
  // headers: {
  //   'x-csrf-token': getCookie('csrfToken'), // 前后端不分离的情况加每次打开客户端，egg会直接在客户端的 Cookie 中写入密钥 ，密钥的 Key 就是 'scrfToken' 这个字段，所以直接获取就好了
  // },
});

api.interceptors.request.use(config => {
  // 上面提到contentType是后台拿不到参数的一个因素(常见的)
  const contentType = config.headers['Content-Type'];

  // 如果后台接收的contentType值为application/x-www-form-urlencoded 而不是上面默认的 application/json
  // 且为post的请求，要引入qs模块对参数的处理：

  // 必须把config给返回出去，这是请求的一些参数，配置，必须的
  return config;
});

api.interceptors.response.use(
  response => {
    if (response.data.code === -100) {
      const { origin } = window.location;
      // window.location.href = 'http://127.0.0.1:8080/#/login';
      window.location.href = origin + '#/login';
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default api;
