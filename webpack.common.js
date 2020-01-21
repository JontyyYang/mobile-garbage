const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 这里调用全局通用的样式，在sass-loader中配置
const sassData = require('./client/config/pack/sass-data');

const webpackConfig = () => {
  const config = {
    entry: './client/index.js',

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[hash].js',
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './client/index.html',
      }),

      new CleanWebpackPlugin(),

      new VueLoaderPlugin(),
    ],

    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ['vue-loader'],
        },
        {
          test: /\.(less|css)$/,
          use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                prependData: sassData,
              },
            },
          ],
        },
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        },
        {
          test: /\.(png|svg|gif|jpg)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader'],
        },
      ],
    },

    resolve: {
      alias: {
        libjs: path.resolve('client/lib-js'),
        libcss: path.resolve('client/lib-css'),
        libimg: path.resolve('client/lib-img'),
        pages: path.resolve('client/pages'),
        '@cmp': path.resolve('client/commponents'),
      },
    },
  };

  return config;
};

module.exports = webpackConfig;
