// https://leetcode-cn.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  let prefix = strs[0]
  // 不是每一个都等于最大前缀，就继续循环
  while(!strs.every(item => item.slice(0, prefix.length) === prefix)) {
    prefix = prefix.slice(0, prefix.length - 1)
  }
  return prefix || ''
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["c","acc","ccc"]))

