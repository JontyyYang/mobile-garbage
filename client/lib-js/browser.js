// 判断浏览器版本支持pdf
const Browser = {
  isFirefox: () => typeof InstallTrigger !== 'undefined',
  isIE: () => navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode,
  isEdge: () => !Browser.isIE() && !!window.StyleMedia,
  isChrome: (context = window) => !!context.chrome,
  isSafari: () => Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0
    || navigator.userAgent.toLowerCase().indexOf('safari') !== -1,
};

export default Browser;
