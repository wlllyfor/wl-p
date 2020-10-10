/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false 
  }
  const arr = (x + '').split('')
  const len = arr.length
  return arr.every((item, index) => {
    return item === arr[len - index - 1]
  })
};

console.log(isPalindrome(112211))