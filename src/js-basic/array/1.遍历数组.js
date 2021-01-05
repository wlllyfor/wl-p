// forEach遍历数组不支持break和continue，用return跳出
// 1,3，return相当于for循环中的continue
const arr = [1, 2, 3]
// arr.forEach(item => {
//     if(item === 2) {
//         return 
//     } else {
//         console.log(item)
//     }
// })

// every return true等同于continue, return false等同于break，默认return false
// arr.every(item => {
//   if(item === 3) {
//     return false
//   } else {
//     console.log(item)
//     return true
//   }
// })

const Price = {
  A: 1,
  B: 2,
  C: 3
}
// for in 一般遍历对象， for of 遍历数组
// for in
// for (const item in arr) {
//   console.log(item)
// }

// for of 
// for (const item of Object.keys(Price)) {
//   console.log(Price[item])
// }





