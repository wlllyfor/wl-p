/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//   // return nums1.slice(0,m).concat(nums2).sort()
//   nums1.splice(m, n, ...nums2 )
//   return nums1.sort((a, b) => a -b)
// };

const nums1 = [1,2,3,0,0,0,0]
const nums2 = [2,5,6,9]

var merge = function(nums1, m, nums2, n) {
  let p1 = 0, p2 = 0;
  const sorted = new Array(m + n).fill(0);
  var cur;
  while (p1 < m || p2 < n) {
      if (p1 === m) {
          cur = nums2[p2++];
      } else if (p2 === n) {
          cur = nums1[p1++];
      } else if (nums1[p1] < nums2[p2]) {
          cur = nums1[p1++];
      } else {
          cur = nums2[p2++];
      }
      sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i != m + n; ++i) {
      nums1[i] = sorted[i];
  }
};

console.log(merge(nums1, 3, nums2, 4))