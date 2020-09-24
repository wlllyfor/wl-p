/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const resArr = (n.toString(2)).match(/1/g)
    if(Array.isArray(resArr)) {
        return resArr.length
    } else {
        return 0
    }
};
console.log(hammingWeight(19))