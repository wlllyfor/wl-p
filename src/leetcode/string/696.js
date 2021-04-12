// https://leetcode-cn.com/problems/count-binary-substrings/

/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function(s) {
  let n = 0
  const arr = s.match(/([1]+)|([0]+)/g)
  for(let i = 0; i < arr.length - 1; i++) {
    n += Math.min(arr[i].length, arr[i + 1].length)
  }
  return n
};

console.log(countBinarySubstrings('0001110011'))