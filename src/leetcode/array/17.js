/**
 * @param {string} digits
 * @return {string[]}
 * 
 */
const map = {
  1: '',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}
const letterCombinations = function(digits) {
  function merge(a, b) {
    let mergeArr = []
    for(let i = 0; i < a.length; i++) {
      for(let j = 0; j < b.length; j++) {
        mergeArr.push(a[i] + b[j])
      }
    }
    return mergeArr
  }
  if(digits.length > 0) {
    let res = map[digits[0]].split('')
    for(let i = 0; i < digits.length - 1; i++) {
      res = merge(res, map[digits[i + 1]].split(''))
    }
    return res
  } else {
    return []
  }
}

console.log(letterCombinations(''))