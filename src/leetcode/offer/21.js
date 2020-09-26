/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    const res = []
    nums.forEach(item => {
        if(item % 2 === 1) {
            res.unshift(item)
        }
        if(item % 2 === 0) {
            res.push(item)
        }
    })
    return res
};

console.log(exchange([1,2,3,4]));