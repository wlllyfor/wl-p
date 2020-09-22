/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // console.log(n.toString(2))
    const resArr = (n.toString(2)).match(/1/g)
    // console.log(resArr)
    if(Array.isArray(resArr)) {
        return resArr.length
    } else {
        return 0
    }
};
console.log(hammingWeight(19))