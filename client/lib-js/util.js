/**
 * @description: 判断长度范围是否正确
 * @param {string} 必选 | 字符串
 * @param {string} 必选 | 字符串 | equal，big，small，range
 * @param {int} 必选 如果是equal，则比对是否相等，如果是big|small则看是否大于|小于该值，如果是range，则看是否在这个范围之间
 * @param {int} 可选 为range时才有
 * @return: 【true|false】
 */
export function validatorLength(str, state, smallNum, bigNum) {
  let flag = true;
  const len = str.length;
  if (typeof str === 'string' && state && smallNum) {
    switch (state) {
      case 'eaual':
        if (len !== smallNum) {
          flag = false;
        }
        break;
      case 'big':
        if (len < smallNum) {
          flag = false;
        }
        break;
      case 'small':
        if (len > smallNum) {
          flag = false;
        }
        break;
      case 'range':
        if (len < smallNum || len > bigNum || !bigNum) {
          flag = false;
        }
        break;
      default:
        flag = false;
        break;
    }
  } else {
    flag = false;
  }
  return flag;
}

// 判断是否电话号码是否正确， 和后端校验规则一致
export function validatorTel(str) {
  const telStr = /^1[3456789]\d{9}$/;
  if (!telStr.test(str)) {
    return false;
  }
  return true;
}

// 转换时间
export const formatTime = time => {
  const tempDate = new Date(time);
  const year = tempDate.getFullYear();
  const month = tempDate.getMonth() + 1;
  const data = tempDate.getDate();
  return `${year}年-${month}月- ${data}日`;
};
