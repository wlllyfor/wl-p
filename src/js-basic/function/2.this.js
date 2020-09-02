// 'use strict'
/**
 * js中的this，与arguments一样，就是函数的隐式参数，可以在任意函数中调用
 * 在不同情况下调用结果不同
 *  */ 

 // 1.直接调用函数，严格模式为undefined，非严格模式为window
 function fn1 () {
   console.log(this)
 }
 fn1()

 // 2.对象中的函数，this为这个对象
 const obj1 = {
  fnA() {
    console.log(this)
  }
 }
 obj1.fnA()

 // 3.构造函数中，this为新建的实例
 const Person = function(name) {
   console.log(this)
   this.name = name
 }
 const p = new Person('wanglin')

 // 4.可以使用call和apply，改变this的指向
 const obj2 = {}
 function fn2() {
   let result = 0
   Array.from(arguments).forEach(item => {
    result += item
   })
  this.sum = result
 }

//  fn2.call(obj2, 1, 2, 3, 4)
//  console.log(obj2)

// 手写一个call函数
Function.prototype.myCall = function () {
  const args = Array.from(arguments)
  const [obj, ...restArr] = args
  obj.fn = this
  obj.fn(...restArr)
  delete obj.fn
}

fn2.myCall(obj2, 5, 6, 7, 8)
console.log(obj2)

// 手写一个forEach