module.exports = function reverse (n) {
  let strNum = String(n);
  let strNumArr = strNum.split('');

  if (strNumArr[0] == '-') {
      strNumArr.shift();
  }

  let reversedStrNumber = strNumArr.reverse().join('');

  return reversedStrNumber;
}