const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    'no-console': 1,
    'arrow-parens': 0,
    'import/no-extraneous-dependencies': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['libjs', path.resolve('app/lib-js')],
          ['libcss', path.resolve('app/lib-css')],
          ['libimg', path.resolve('app/lib-img')],
          ['pages', path.resolve('app/pages')],
          ['@cmp', path.resolve('app/commponents')],
        ],
      },
    },
  },
  //
  /* eslint-disable */
  // 中间一段禁用eslint
  /* eslint-enable */

  /* eslint-disable no-alert, no-console */
  // 中间一段，具体禁用eslint
  /* eslint-enable no-alert, no-console */

  /* eslint-disable */
  // 整个文件禁用

  /* eslint-disable no-alert */
  // 整个文件禁用某一种

  // eslint-disable-line 某行禁用
  // eslint-disable-next-line 下一行禁用
};
