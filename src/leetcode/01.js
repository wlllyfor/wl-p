/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}
  const res = []
  nums.forEach((item, index) => {
    if(map[target - item] === undefined) {
      map[item] = index
    } else {
      res.push(index, map[target - item])
    }
  })
  return res
};

console.log(twoSum([2, 7, 11, 15], 18))