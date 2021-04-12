/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
  const removeElement = function(nums, val) {
    let i = 0, j = 0
    while(i < nums.length) {
      if(nums[i] === val) {
        i++
      } else {
        nums[j] = nums[i]
        i++
        j++
      }
    }
    console.log(nums)
    return j
  };

console.log(removeElement([3, 2, 2, 3, 3, 2, 1], 3))