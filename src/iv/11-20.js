/**
 * 算法手写-数组扁平化
 * 编写一个程序将数组扁平化去并除其中重复部分数据，最终得 到一个升序且不重复的数组
 */

// const arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]

// const fn = (arr) => {
//   return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)
// }
// console.log(fn(arr))

/**
 * Promise 构造函数是同步执行还是异步执行，那么 then 方法呢？
 */
// const promise = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve()
//   console.log(2)
// })

// promise.then(() => {
//   console.log(3)
// })

// console.log(4)

/**
 * 如何实现一个 new
 * https://github.com/KieSun/Dream/issues/14
 * new 操作符会返回一个对象，所以我们需要在内部创建一个对象
 * 这个对象，也就是构造函数中的 this，可以访问到挂载在 this 上的任意属性
 * 这个对象可以访问到构造函数原型上的属性，所以需要将对象与构造函数链接起来
 * 返回原始值需要忽略，返回对象需要正常处理
 */

// const create = (Con, ...args) => {
//   const obj = {}
//   Object.setPrototypeOf(obj, Con.prototype)
//   const fnRes = Con.apply(obj, args)
//   return fnRes instanceof Object ? fnRes : obj
// }

// function Test(name, age) {
//   this.name = name
//   this.age = age
//   // return {}
// }
// Test.prototype.sayName = function() {
//   console.log(this.name)
// }

// const t = new Test('wanglin', 24)
// console.log(t)
// t.sayName()
// const m = create(Test, 'wanglin', 24)
// console.log(m)
// m.sayName()