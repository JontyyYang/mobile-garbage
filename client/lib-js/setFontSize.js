const setFont = () => {
  const oHtml = document.getElementsByTagName('html')[0];
  const width = oHtml.clientWidth;
  oHtml.style.fontSize = `${75 * (width / 375)}px`;
};
const setFontSize = () => {
  window.addEventListener('load', () => {
    setFont();
  });
  window.addEventListener('resize', () => {
    setFont();
  });
};

export default setFontSize;
