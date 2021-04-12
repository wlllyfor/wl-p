/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

/**
 * 
 * 包含1：找到所有的连续0
 * 00：数组边缘可以插入1
 * 000：1
 * 0000：边缘插入2，中间插入1
 * 00000：2
 * 边缘：n/2，向下取整
 * 中间：(n-1)/2，向下取整
 * 
 * 不包含1：n/2，向上取整
 *  */ 
const canPlaceFlowers = function(flowerbed, n) {
  let leftNum = 0, rightNum = 0, middle = [], canInsertNum = 0
  if(flowerbed.includes(1)) {
    leftNum = flowerbed.slice(0, flowerbed.indexOf(1)).join('').length
    rightNum = flowerbed.slice(flowerbed.lastIndexOf(1) + 1, flowerbed.length).join('').length
    middle = flowerbed.slice(flowerbed.indexOf(1) + 1, flowerbed.lastIndexOf(1)).join('').split(1)
  } else {
    canInsertNum += Math.ceil(flowerbed.length / 2)
  }
  canInsertNum += Math.floor(leftNum / 2) + Math.floor(rightNum / 2)
  middle.length > 0 && middle.forEach(item => {
    canInsertNum += item !== '' && Math.floor((item.length - 1) / 2)
  })
  return canInsertNum >= n
};
// console.log(canPlaceFlowers([0,0,0], 1))




/**
 * 遍历flowerbed
 * 当前项为0，n-1项 不为1（为0或undefined），n+1项 不为1（为0或undefined） 可种花 当前项置为1
 */
const canPlaceFlowers1 = (flowerbed, n) => {
  for(let i = 0; i < flowerbed.length; i++) {
    if(flowerbed[i - 1] !== 1 && flowerbed[i] === 0 && flowerbed[i + 1] !== 1) {
      n--
      flowerbed[i] = 1
    }
  }
  return n <= 0
}

console.log(canPlaceFlowers1([0,0,1], 2))