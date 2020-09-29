/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(x === 0) {
    return 0
  }
  const str = x + ''
  const arr = str.split('').filter(item => item !== '0')
  if(arr[0] === '-') {
    arr.shift()
    return parseInt('-' + arr.reverse().join(''))
  } else {
    return parseInt(arr.reverse().join(''))
  }
};

console.log(reverse(0))