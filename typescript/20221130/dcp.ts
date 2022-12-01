/*
You have a long flowerbed in which some of the plots are planted, and some are not. 
However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 
means not empty, and an integer n, return if n new flowers can be planted in the 
flowerbed without violating the no-adjacent-flowers rule.
*/

export const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  while (n > 0) {
    // find the first 1 in the array from the left
    let index = flowerbed.findIndex(plot => plot === 1)
    if (index === -1) {
      flowerbed[0] = 1
      n--
      continue
    }

    // find any open spots to its left
    let indexL = index
    while (indexL >= 0) {
      if (flowerbed[indexL] === 1) indexL -= 2
      else if (flowerbed[indexL] === 0 && flowerbed[indexL - 1] === 1) indexL -= 3
      else break
    }
    if (indexL >= 0 && flowerbed[indexL - 1] !== 1 && flowerbed[indexL + 1] !== 1) {
      flowerbed[indexL] = 1
      n--
      continue
    }

    // if none are found, find the next available space to its right
    let indexR = index
    while (indexR < flowerbed.length) {
      if (flowerbed[indexR] === 1) indexR += 2
      else if (flowerbed[indexR] === 0 && flowerbed[indexR + 1] === 1) indexR += 3
      else break
    }
    if (indexR < flowerbed.length && flowerbed[indexR - 1] !== 1 && flowerbed[indexR + 1] !== 1) {
      flowerbed[indexR] = 1
      n--
      continue
    }

    // if there are still none found, return false
    return false
  }
  return true
}

const args = process.argv.slice(2)
const n = parseInt(args[0])
const flowerbed = args.slice(1).map(Number)
const result = canPlaceFlowers(flowerbed, n)
console.log(result)
