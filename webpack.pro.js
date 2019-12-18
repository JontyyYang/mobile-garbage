const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      // 排除某些文件
      exclude: /node_module/,
      // 过滤
      chunkFilter: chunk => {
        if (chunk) {
          return true;
        }
        return false;
      },
      // 文件缓存
      cache: true,
      // 并行打包
      parallel: true,
      // 去除所有注释
      uglifyOptions: {
        output: {
          comments: false,
        },
        compress: {
          drop_debugger: true,
          drop_console: true,
        },
      },
    }),
  ],
});
