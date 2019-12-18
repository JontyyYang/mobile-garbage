const autofixer = require('autoprefixer');

module.exports = {
  //  autofixer 原来里面的参数是browser，现在必须用overrideBrowserslist
  //  这个是为了让自动加前缀生效，实际含义是支持那些浏览器
  plugins: [
    autofixer({
      overrideBrowserslist: [
        'defaults',
        'not ie < 11',
        'last 2 versions',
        '> 1%',
        'iOS 7',
        'last 3 iOS versions',
      ],
    }),
  ],
};
