/**
 * 写 React / Vue 项目时为什么要在列表组件中写 key， 其作用是什么？
 * key为什么不能是index？删除中间某个节点再push的时候，造成最后一个节点和倒数第二个节点的key相同
 */

/**
 * ['1', '2', '3'].map(parseInt)   what & why
 */

// console.log(['1', '2', '3'].map(parseInt))

/**
 * 手写防抖和节流
 * 防抖 高频事件触发后的一定时间之后才执行函数
 * 节流 高频事件触发后一段时间内只执行一次函数
 */

const debounce = (fn, delay) => {
  let timer = null
  return function () {
    console.log(111, this)
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

const resize = (e) => {
  // console.log(e)
  console.log('resize')
}

// window.onresize = debounce(resize, 500)

// const throttle = (fn, delay) => {
//   let start
//   return function() {
//     if(start === undefined) {
//       fn.apply(this, arguments)
//       start = Date.now()
//     }
//     if(start === null) {
//       start = Date.now()
//     }
//     const now = Date.now()
//     // console.log(now - this.start)
//     if(now - start > delay) {
//       fn.apply(this, arguments)
//       start = null
//     }
//   }
// }

// 节流函数时间戳版
const throttle = (fn, delay) => {
  let start = 0
  return function () {
    let now = Date.now()
    if (now - start > delay) {
      fn.apply(this, arguments)
      start = now
    }
  }
}
// 节流函数定时器版
// const throttle = (fn, delay) => {
//   let timer = null
//   return function () {
//     if (!timer) {
//       timer = setTimeout(() => {
//         fn.apply(this, arguments)
//         timer = null
//       }, delay)
//     }
//   }
// }

window.onresize = throttle(resize, 1000)

/**
 * 介绍下深度优先遍历和广度优先遍历，如何实现？
 */

// 深度优先遍历
function deepFirstWalk(tree, res = []) {
  if (tree) { 
    res.push(tree)
    if(tree.children) {
      const childrens = tree.children 
      for (let i = 0; i < childrens.length; i++) 
      deepFirstWalk(childrens[i], res) 
    }
  } 
  return res 
}

// 广度优先遍历
function widthFirstWalk(tree) {
  let res = [];  
    if (tree != null) {  
      let queue = [];  
        queue.unshift(tree);  
        while (queue.length != 0) {  
          let item = queue.shift();  
            res.push(item);  
            let children = item.children;  
            if(children) {
              for (let i = 0; i < children.length; i++) {
                queue.push(children[i]);  
              } 
            }
        }  
    }  
    return res; 
}

const tree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 4,
          children: null
        },
        {
          val: 5,
          children: null
        }
      ]
    },
    {
      val: 3,
      children: [
        {
          val: 6,
          children: null
        }
      ]
    }
  ]
}

// console.log(deepFirstWalk(tree)) // 1,2,4,5,3,6
// console.log(widthFirstWalk(tree)) // 1,2,3,4,5,6

/**
 * 分别用深度优先和广度优先思路手写深拷贝
 */
const obj = {
  a: {
    b: 1
  },
  // d: undefined
}

obj.e = obj


// 浅拷贝
// console.log(Object.assign({}, obj))
// const obj1 = {...obj}
// obj.a.b = 123
// console.log(obj1)

// 循环引用对象报错
// console.log(JSON.stringify(obj))

const deepClone = (obj, visitedArr = []) => {
  const isObject = (o) => {
    return (typeof o === "object" || typeof o === "function") && o !== null
  }

  if (!isObject(obj)) {
    throw new Error('非对象')
  }
  const isArray = Array.isArray(obj)
  const newObj = isArray ? [] : {}

  // visitedArr 解决环装引用问题
  visitedArr.push(obj)

  Reflect.ownKeys(obj).forEach((key) => {
    const index = visitedArr.indexOf(obj[key])
    newObj[key] = isObject(obj[key]) ? (index > -1 ? visitedArr[index] : deepClone(obj[key])) : obj[key]
  })

  return newObj

}
const obj2 = deepClone(obj)
// obj.name = 'obj'
// console.log(obj2)

/**
 * ES5/ES6 的继承除了写法以外还有什么区别
 * 1.class初始化前不能调用
 * 2.class 声明内部会启用严格模式
 * 3.class 的所有方法（包括静态方法和实例方法）都是不可枚举的。
 * 4.class 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有[[construct]]，不能使用 new 来调用。
 * 5.必须使用 new 调用 class。
 */
// https://blog.csdn.net/qq_43540219/article/details/108174314


/**
 * setTimeout、Promise、Async/Await 的区别
 */


/**
 *  Async/Await 如何通过同步的方式实现异步
 * https://segmentfault.com/a/1190000038836203
 */

/**
 * 异步笔试题
 */

// async function async1() {
// 	console.log('async1 start');
// 	await async2();
// 	console.log('asnyc1 end');
// }
// async function async2() {
// 	console.log('async2');
// }

// console.log('script start');
// setTimeout(() => {
// 	console.log('setTimeOut');
// }, 0);

// async1();

// new Promise(function (reslove) {
// 	console.log('promise1');
// 	reslove();
// }).then(function () {
// 	console.log('promise2');
// })
// console.log('script end');
