const f = []
// const numWays = function(n) {
//   if(n === 0) return 1
//   if(n === 1) return 1
//   if(n > 1) {
//     if(f[n] === undefined) {
//       f[n] = numWays(n - 1) + numWays(n - 2)
//     }
//   }
//   return f[n] % 1000000007
// };

const numWays2 = function(n) {
  if(n <= 1) return 1
  const f = [1,1,2]
  for(let i = 2; i <= n ; i++){
    f[i] = (f[i - 1] + f[i - 2]) % 1000000007
  }
  return f[n] 
}

console.log(numWays2(78))