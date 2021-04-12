/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
  let index = nums.indexOf(target)
  if( index > -1) {
    return index
  } else {
    while(index < nums.length) {
      index++
      if(nums[index] > target) {
        break
      }
    }
  }
  return index
}

console.log(searchInsert([1,3,5,6], -1))