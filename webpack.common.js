const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const webpackConfig = () => {
  const config = {
    entry: './app/index.js',

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[hash].js',
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './app/index.html',
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
        libjs: path.resolve('app/lib-js'),
        libcss: path.resolve('app/lib-css'),
        libimg: path.resolve('app/lib-img'),
        pages: path.resolve('app/pages'),
        '@cmp': path.resolve('app/commponents'),
      },
    },
  };

  return config;
};

module.exports = webpackConfig;
