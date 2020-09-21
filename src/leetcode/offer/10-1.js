/**
 * @param {number} n
 * @return {number}
 */
const f = [0,1]
const fib = function(n) {
  if(n === 0) return f[0]
  if(n === 1) return f[1]
  if(n > 1) {
    if(f[n] === undefined) {
      f[n] = fib(n - 1) + fib(n - 2)
    }
  }
  return f[n] % 1000000007
};


const startTime = (new Date()).getTime()
console.log(fib(1000))
const endTime = (new Date()).getTime()
console.log(endTime - startTime)