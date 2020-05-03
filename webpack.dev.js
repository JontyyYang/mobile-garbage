/*
 * @Author: jontyy
 * @Date: 2019-12-07 16:43:50
 * @Description:开发环境的配置
 */
const merge = require('webpack-merge');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common(), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    proxy: {
      '/mobile': {
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true,
        pathRewrite: { '^/mobile': '' },
      },
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      failOnError: false,
      quiet: true,
      fix: true,
    }),
  ],
});
