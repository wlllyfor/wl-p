/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0, j = 0
  while (i < nums.length) {
    if(nums[i] === nums[j]) {
      i++
    } else {
      j++
      nums[j] = nums[i]
    }
  }
  return j + 1
};
console.log(removeDuplicates([1,1,2]))
