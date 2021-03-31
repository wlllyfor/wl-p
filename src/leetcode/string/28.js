// https://leetcode-cn.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(str, subStr) {
  return str.indexOf(subStr)
};  
const strStr1 = function(str, subStr) {
  let p = 0, j = 0
  while(p < str.length && j < subStr.length) {
    if(str[p + j] !== subStr[j]) {
      p++
      j = 0
    } else {
      j++
    }
  }
  return j === subStr.length ? p : -1
};  

console.log(strStr1("mississippi", "issip"))