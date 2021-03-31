// https://leetcode-cn.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */

const romanMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,           
  'D': 500,            
  'M': 1000,
  'IV': 4,
  'IX': 9,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900
}

const combine = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM']

// const romanToInt1 = function(s) {
//   let res = 0
//   const combineArr = []
//   const strArr = s.split('')
//   combine.forEach(item => {
//     if(s.indexOf(item) > -1) {
//       combineArr.push(item)
//       strArr.splice(s.indexOf(item), 2)
//     }
//   })
//   combineArr.forEach(item => {
//     res += romanMap[item]
//   })
//   strArr.forEach(item => {
//     res += romanMap[item]
//   })
//   return res
// };

// const romanToInt2 = function(s) {
//   let res = 0
//   while(s.length > 0) {
//     const currentTwoChar = s.split('').splice(0,2).join('')
//     if(combine.includes(currentTwoChar)) {
//       res += romanMap[currentTwoChar]
//       s = s.slice(2)
//     } else {
//       res += romanMap[currentTwoChar[0]]
//       s = s.slice(1)
//     }
//   }
//   return res
// };

// console.log(romanToInt('IV'))

// 

const numMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,           
  'D': 500,            
  'M': 1000
}

const romanToInt3 = function(s) {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if(numMap[s[i + 1]]) {
      if( numMap[s[i]] >= numMap[s[i + 1]] ) {
        res += numMap[s[i]]
      } else {
        res -= numMap[s[i]]
      }
    } else {
      res += numMap[s[i]]
    }
  }
  return res
}

console.log(romanToInt3('III'))