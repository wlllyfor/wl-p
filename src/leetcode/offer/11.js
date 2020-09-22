/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    return numbers.sort((a,b) => {
        return a - b
    })[0]
};