/**
 * 1.如何声明变量成为window对象的属性
 */
  var a = 'aaa'
  b = 'bbb'
  window.c = 'ccc'

  function d() {
    e = 'eee'
  }
  d()
  // console.log(window.a)  // undefined，如果是全局作用域用var声明的就能成为window对象的属性
  // console.log(window.b)
  // console.log(window.c)
  // console.log(window.e)

  // console.log(a, b, c, e)

/**
 * 推荐直接用window.c = 'ccc' 的方式声明，比较清晰明了
 * 最好使用大写的方式来声明变量，因为一般全局变量里声明的都是配置项，比如：window.CONFIG = ... 
 */

/**
* 2.什么是变量提升
*/
  function hoistFn() {
    console.log(hoistA)  // undefined
    var hoistA = 'aaa'
  }
  // hoistFn()
/**
* 变量提升就是把声明的变量都拉到函数作用域的顶部
* 防止变量提升的方法，不使用var来定义变量
*/

/**
 * 3.let、var和const的区别
 */

  // 块级作用域
  // if(true) {
  //   let letA = 'aaa'
  // }
  // console.log(letA)   // ReferenceError

  // 暂时性死区
  // function letFn() {
  //   console.log(letB)  // 报错
  //   let letB = 'bbb'
  // }
  // letFn()
  // 重复声明
  // let letD = 'ddd'
  // let letD = 'ddd1'  // error

  // 全局声明
  // 全局作用域内，用let声明的变量不会成为window对象的属性

  // for循环中使用let
  // for(var i = 0; i < 5; i++) {
  //   setTimeout(() => console.log(i))
  // }
  // for(let i = 0; i < 5; i++) {
  //   setTimeout(() => console.log(i))
  // }

  // const 声明的变量无法修改（只指向变量的引用，可以修改对象内部的属性）
  // const constA = '123'
  // constA = '222'  // 报错
  // const constB = {}
  // constB.a = 1   // 可以修改

/**
 * 总结：不使用var，const优先，let次之
 */

/**
 * JS的7种数据类型
 * 6种基本数据类型：Number、String、Boolean、Undefined、Null、Symbol
 * 1种特殊类型：Object
 */

/**
 * typeof null
 */

  // console.log(typeof null) // object
  // function funcA() {}
  // console.log(typeof funcA) // function
  // console.log(typeof 42n)  // bigint
  // console.log(typeof NaN)  // number

/**
 * 变量在底层是用二进制存储的，null为0，对象为000，所以typeof null 为object，这是一个历史遗留bug，后来有提议要改，但改了之后影响较大，所以就一直将错就错了
 */

/**
 * typeof 未声明的变量、已声明未赋值变量
 */

  // console.log(typeof aaa)  // undefined
  // var bbb
  // console.log(typeof bbb)  // undefined

/**
 * 都是undefined，但调用时两者是完全不一样的东西, aaa会报错，bbb为undefined
 */

/**
 * 打印null == undefined
 */

  // console.log( null == undefined )

/**
 * 隐式转换，都为false
 */

/**
 * 分别说出String、Number、Object转换为布尔值为true和为false的值
 */

  //  console.log(Boolean('123')) // true
  //  console.log(Boolean('0'))  // true
  //  console.log(Boolean(''))   // false
  //  console.log(Boolean(0))    // false
  //  console.log(Boolean(NaN))  // false
  //  console.log(Boolean(1))    // true
  // console.log(Boolean([]))     // true
  // console.log(Boolean(null))   // false
  // console.log(Boolean(undefined)) // false

/**
 * 尤其注意 '0' 和 []
 */

/**
 * 为什么0.1+0.2 != 0.3
 */

  // console.log(0.1 + 0.2) // 0.30000000000000004

/**
 * js使用了IEEE 754格式表示数值，所有使用了这种类型表示数值的语言都有精度问题
 */


/**
 * 打印NaN == NaN
 */

//  console.log(NaN == NaN)  // false
//  console.log( 5 / 0)      // Infinity
//  console.log(isNaN(NaN))  // true


/**
 * Number()、parseInt()、parseFloat()的区别
 */

  // console.log(Number(true))   // 1
  // console.log(Number(false))  // 0
  // console.log(Number(null))   // 0
  // console.log(Number(undefined))  // NaN
  // console.log(Number(''))         // 0
  // console.log(Number('011'))      // 11
  // console.log(Number('abc'))     // NaN
  // console.log(Number('100a'))     // NaN
  // console.log(Number([]))        // 0
  // console.log(Number(['1']))     // 1
  // console.log(Number({}))        // NaN

  // console.log(parseInt('100a'))  // 100
  // console.log(parseInt(''))      // NaN
  // console.log(parseInt([]))      // NaN
  // console.log(parseInt('100.80'))  // 100，不四舍五入
  // console.log(parseFloat('100.23'))  // 100.23
/**
 * Nmber用于将数据类型转换为数字，parseInt和parseFloat用于将字符串转换为数字
 */

/**
 * String() 和toString() 的区别
 */
//  console.log(String(null))
//  console.log(null.toString()) // 报错
/**
 * null和undefined没有toString这个方法，可以调用String
 */