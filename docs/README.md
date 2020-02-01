# 功能

1. 垃圾回收移动端
   - 支持回收人员接受消息
   - 支持居民发布回收请求，支持商城积分兑换
2. 结合 pc 后端使用
3.

# 项目依赖

## 前端依赖

### 框架相关

1. vue
2. Vue-loader
3. vuex
4.

### 格式化相关

1. eslint
2. stylelint
3.

### 样式相关

1. less
2. sass
3. vant
4.

### 其它相关

1. webpack
2. node
3. qs
4. lodash
5. git
6. axios
7. js-md5
8. js-cookie
9.

# 启动

1. 本地安装 yarn，不会建议直接百度，npm 也可以
2. yarn || npm install 安装依赖包
3. yarn dev 开发 || npm run dev 开发
4. yarn build || npm run build 打包
5. 在 app 目录下 yarn 安装服务器依赖，yarn dev 开发
6. 数据库相关数据后续会想办法折腾出来

# 相关问题

1. 建议按照 vscod.md 的配置设置一下自己 vscode 的配置， 否则部分属性，比如 eslint 不会生效。
2. npm 版本 12.14.1
3. 重要数据走 md5 加密
4. **treer -i "/node_modules|.git|.vscode|yarn-error.log/" -e ./docs/TREE.md** 可以生成项目结构到指定目录下，需要全局安装 treer
5. yarn upgrade-interactive --latest 安装所有依赖包的最新版本

# rem 相关

1. 在 package.json 中设置 rootFontsize 是 75，意味着整个 5rem 是 100%宽度 https://imweb.io/topic/5a523cc0a192c3b460fce3a5

# 粗略目录结构说明

mobile-garbage
├─. editorconfig **团队开发的一些代码编写规范**
├─.babelrc **babel 的配置文件**
├─.eslintrc.js **eslint 的配置文件**
├─.prettierrc.js **prettierrc 配置文件**
├─.stylelintrc.json **stylelint 的配置文件**
├─package.json **系统的配置文件**  
├─postcss.config.js **css 前缀的配置文件**
├─webpack.common.js **webpack 通用配置文件**
├─webpack.dev.js **webpack 开发环境配置文件**
├─webpack.pro.js **webpack 打包的配置文件**
├─yarn.lock **yarn 的配置文件**
├─docs **说明**
| ├─CHANGE.md **每次迭代的修改文件**
| ├─README.md **项目的说明文档**
| ├─TREE.md **目录的生成文档**
| └VSCODE.md **vscode 全局 setting 的配置文件**
├─dist **打包文件生成的地址**
├─client **系统移动端的核心代码**
| ├─index.html **入口 html**
| ├─index.js **入口 js 文件**
| ├─router.js **前端路由文件**
| ├─pages
| | ├─App.vue
| | ├─test
| | | └test.vue
| | ├─normal
| | | └normal.vue
| | ├─login
| | | ├─login.vue
| | | └userStateInfo.js
| | ├─home
| | | └home.vue
| ├─lib-js
| | ├─browser.js
| | └setFontSize.js
| ├─lib-img
| | ├─.DS_Store
| | ├─avator.jpg
| | ├─bg.jpg
| | └register.jpg
| ├─lib-css
| | ├─mixin.scss
| | └reset.less
| ├─config
| | ├─pack
| | | └sass-data.js **全局通用的 mixin 文件**
| ├─components

# 配置

1. stylelint 规则 https://cloud.tencent.com/developer/section/1489630
2. less http://lesscss.org/#
3. vue https://cn.vuejs.org/
4. webpack https://www.webpackjs.com/concepts/
5. git https://morvanzhou.github.io/
6. 配置 eslint 等 https://www.jb51.net/article/135191.htm
7. vue 中的最佳实践 https://github.com/coppyC/blog/issues/1
8. qs 使用文档 https://www.npmjs.com/package/qs
9. lodash 使用文档 https://www.lodashjs.com/docs/latest
10. axios 文档 https://github.com/axios/axios

## todo

1. config.default 中关闭的 csrf 校验，上到服务器应该恢复 https://blog.csdn.net/weixin_43704471/article/details/90763103
2. 不同页面的 title 应该不同， 需要修改 webpack 中的 html 模板配置
3. vuex 要存数据，要获取用户登录数据那些
4. 战胜小区多少用户需要后期制作
5. 用户头像需要后期完善
