/**
 * @param {number[]} deck
 * @return {boolean}
 */
 const hasGroupsSizeX = function(deck) {
  const map = {}
  let res = true
  for (let i = 0; i < deck.length; i++) {
    if(map[deck[i]] === undefined) {
      map[deck[i]] = 1
    } else {
      map[deck[i]] = map[deck[i]] + 1
    }
  }
  const arr = Object.values(map)
  if (arr.length === 1 && arr[0] < 2) {
    return false
  } else if (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      if(maxG(arr[i], arr[i + 1]) > 1) {
        arr[i + 1] = maxG(arr[i], arr[i + 1])
      } else {
        res = false
      }
    }
  }
  function maxG(a, b) {
    if (b === 0) {
      return a
    } else {
      return maxG(b, a % b)
    }
  }
  return res
};

console.log(hasGroupsSizeX([1,1,2,2,3,3,3]))

// 6, 8, 9