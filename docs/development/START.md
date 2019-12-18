# 启动

1. 本地安装 yarn，不会建议直接百度，npm 也可以
2. yarn || npm install 安装依赖包
3. yarn dev 开发 || npm run dev 开发
4. yarn build || npm run build 打包

# 相关问题

1. 建议按照 vscod.md 的配置设置一下自己 vscode 的配置， 否则部分属性，比如 eslint 不会生效。
2. treer -i "/node_modules|.git|.vscode|yarn-error.log/" -e ./docs/development/TREE.md

# rem 相关

1. 在 package.json 中设置 rootFontsize 是 75，意味着整个 5rem 是 100%宽度 https://imweb.io/topic/5a523cc0a192c3b460fce3a5

# 粗略目录结构说明

mobile-garbage
├─package.json **系统的配置文件**  
├─postcss.config.js **css 前缀的配置文件**
├─.editorconfig **团队开发的一些代码编写规范**
├─.babelrc **babel 的配置文件**
├─.eslintrc.js **eslint 的配置文件**
├─.stylelintrc.json **stylelint 的配置文件**
├─webpack.common.js **webpack 通用配置文件**
├─webpack.dev.js **webpack 开发环境配置文件**
├─webpack.pro.js **webpack 打包的配置文件**
├─yarn.lock **yarn 的配置文件**
├─docs **一些文档的说明**
| ├─production **生产环境相关文档**
| ├─development **开发环境相关文档**
| | ├─CHANGE.md **每次版本迭代修改的内容**
| | ├─INTRO.md **项目的说明文档**
| | ├─NEED.md **待做说明文档**
| | ├─START.md **运行该项目**
| | ├─TREE.md **目录的生成文档**
| | └VSCODE.md **vscode 全局 setting 的配置文件**
├─config **默认的一些配置信息**
├─dist **打包文件生成的地址**
├─app **系统的核心代码**
| ├─App.vue
| ├─index.html
| ├─index.js
| ├─pages
| | └test.vue
| ├─lib-js
| | └browser.js
| ├─lib-img
| | ├─.DS_Store
| | └avator.jpg
| ├─lib-css
| | ├─color.less
| | └reset.less
| ├─components
