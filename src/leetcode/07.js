/**
 * @param {number} x
 * @return {number}
 */
// 字符串拼接法
var reverse = function(x) {
  const k =  parseInt(Array.from(Math.abs(x)+'').reverse().join(''))
  if (k > 2 ** 31 -1) {
      return 0
  }
  return x < 0 ? - k : k
};

reverse(1011110)
