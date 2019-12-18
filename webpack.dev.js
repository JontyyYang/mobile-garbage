const merge = require('webpack-merge');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common(), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
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
