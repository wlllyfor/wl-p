
// 改变原数组
// splice、push、pop、unshift、shift、sort、reverse、fill
const arr1 = [1,2,3]
arr1.splice(1, 1, '插入值')
// console.log(arr1)

// 不改变原数组
// slice、from、concat、join
const arr2 = [1,2,3]
// console.log(arr2.slice(0,1))
// console.log(arr2)

// 获取伪数组
function funA()  {
  console.log(arguments)
  const args = [].slice.call(arguments)
  const args1 = Array.from(arguments)
  console.log(args)
  console.log(args1)
}
funA(1,2,3)

// 浅拷贝数组 , slice、from
const arr3 = Array.from(arr2)
console.log(arr3)

// fill 填充数组
const arr4 = [1, 2, 3, 4, 5]
// console.log(arr4.fill(0))  //全部填充为0
// console.log(arr4.fill(0, 1, 2))  // 位置1，2之间位置填充为0
// console.log(arr4.fill(0, 1))  // 位置1之后位置填充为0

// find、findIndex



// reduce
const arr5 = [1,2,3,4,5]
// 数组中所有值的和
console.log(arr5.reduce( (acc, cur) => acc + cur, 0))
// 数组中所有值的最大值
console.log(arr5.reduce((acc, cur) => Math.max(acc, cur)))
// 累加对象数组里的值
const objArr = [{x:1},{x:2},{x:3}]
console.log(objArr.reduce( (acc, cur) => acc + cur.x, 0 ))
// 二维数组转化为一维数组
const arr51 = [[1,2], [3,4], [5]]
console.log(arr51.reduce( (acc, cur) => acc.concat(cur), [] ))
// 计算数组中每个元素出现的个数
const arr52 = ['wanglin', 'wanglin', 'renlong', 'wentao', 'wentao']
function getCount(arr) {
  const map = {}
  arr52.forEach(item => {
    if(!map[item]) {
      map[item] = 1
    } else {
      map[item]++
    }
  })
  return map
}
console.log(getCount(arr52))

console.log( arr52.reduce( (acc, cur) => {
  if(!acc[cur]) {
    acc[cur] = 1
  } else {
    acc[cur]++
  }
  return acc
}, {}) )


// flat 数组扁平化
const arr6 = [[1,2], [3,4], [5]]
console.log(arr6.flat())