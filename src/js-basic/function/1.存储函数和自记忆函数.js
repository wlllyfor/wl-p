// 函数可以被添加属性，这一特性可以实现两个实用的功能

function funcA () { }
funcA.id = 1
// console.log(a.id)

// 1.存储函数
// 集合中的函数，不希望出现重复函数
const store = {
  nextId: 1,
  funcMap: {},
  add (fn) {
    if(!fn.id) {
      fn.id = this.nextId++
      this.funcMap[fn.id] = fn
    }
  }
}

function funcB () {}
function funcC () {}
// add了两个相同的函数
store.add(funcB)
store.add(funcB)
store.add(funcC)
// console.log(store.funcMap)

// 2.自记忆函数
// 缓存计算结果，另外一个调用使用相同的参数，就可以直接取，提高性能
// 以计算素数为例

function isPrime(value) {
  if(!isPrime.map) {
    isPrime.map = {}
  }
  if(isPrime.map[value] !== undefined) {
    // console.log('从缓存中取')
    return isPrime.map[value]
  }
  let prime = value > 2
  for(let i = 2; i < value; i++) {
    if(value % i === 0) {
      prime = false
      break
    }
  }
  return isPrime.map[value] = prime
}

isPrime(5)
isPrime(5)
