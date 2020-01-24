export function validatorLength(str, len) {
  if (typeof str === 'string' && len && str.trim().length >= len) {
    return true;
  }
  return false;
}

export function validatorTel(str) {
  const telStr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
  if (!telStr.test(str)) {
    return false;
  }
  return true;
}
