/**
 * @param {number} n
 * @return {number[]}
 */
/**
 * 0
 * 
 * 0
 * 1
 * 
 * 00
 * 01
 * 11
 * 10
 * 
 * 000
 * 001
 * 011
 * 010
 * 110
 * 111
 * 101
 * 100
 * 
 * 
 */
const grayCode = function(n) {
  const get = function(n) {
    if (n === 0) {
      return [0]
    } 
    if (n === 1) {
      return [0, 1]
    }
    if (n > 1) {
      let arr = get(n-1)
      let res = []
      const m = Math.pow(2, n) - 1
      for (let i = 0; i < arr.length; i++) {
        res[i] = `0${arr[i]}`
        res[m - i] = `1${arr[i]}`
      }
      return res
    }
  }
  return get(n).map(item => parseInt(item, 2))
}


console.log(grayCode(3))

// const grayCode = function(n) {
//   if(n === 0) return [0]
//   const arr = Array(n).fill(0)
//   const res = []
//   const arrList = []
//   arrList.push(arr.join(''))
//   res.push(parseInt(arr.join(''), 2))
//   for (let i = 0; i < Math.pow(2, n) - 1; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       arr[j] === 0 ? arr[j] = 1 : arr[j] = 0
//       if(arrList.includes(arr.join(''))) {
//         arr[j] === 0 ? arr[j] = 1 : arr[j] = 0
//       } else {
//         arrList.push(arr.join(''))
//         res.push(parseInt(arr.join(''), 2))
//         break
//       }
//     }
//   }
//   return res
// };

