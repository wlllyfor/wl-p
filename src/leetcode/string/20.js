// https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

const map = {
  '(' : ')',
  '[' : ']',
  '{' : '}',
}
const isValid = function(s) {
  const arr = s.split('')
  const stack = []

  while(arr.length) {
    const cur = arr.shift()
    if(cur === map[stack[stack.length - 1]]) {
      stack.pop()
    } else {
      stack.push(cur)
    }
  }
  return !stack.length
};

console.log(isValid('(){}'))