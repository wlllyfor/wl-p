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
  return function() {
    console.log(111, this)
    if(timer) {
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
  return function() {
    let now = Date.now()
    if(now - start > delay) {
      fn.apply(this, arguments)
      start = now
    }
  } 
}
// 节流函数定时器版
const throttle = (fn, delay) => {
  let timer = null
  return function() {
    if(!timer) {
      timer = setTimeout(() => {
        fn.apply(this, arguments)
        timer = null
      }, delay)
    }
  }
} 

window.onresize = throttle(resize, 1000)

