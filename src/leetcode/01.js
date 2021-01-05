/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const res = []
  const map = {}
  nums.forEach( (item, index) => {
    if(!map[target  - item]) {
      map[item] = index
    } else {
      res.push(index, map[target - item])
    }
  })
  return res
};

console.log(twoSum([2, 7, 11, 15], 9))
