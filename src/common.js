export const checkContinueStrInvalid = function(matchStr, str, digit) {
  if (str.length < digit) return false;
  let l = str.length - digit + 1;
  for (let i = 0; i < l; i++) {
    if (matchStr.includes(str.substr(i, digit))) return false;
  }
  return true;
};
