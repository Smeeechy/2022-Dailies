/*
Given an array of integers representing elevations, find the longest peak in the array.

A peak is defined as a number with at least one neighbor with a lesser value to its left and at least one neighbor with a lesser value to its right.
*/

const longestPeak = array => {
  let longestPeak = 0
  for (let i = 1; i < array.length - 1; i++) {
    let currentPeak = 1
    let l = i - 1
    let r = i + 1
    if (array[l] >= array[i] || array[r] >= array[i]) continue
    while (l >= 0 && array[l] < array[l-- + 1]) currentPeak++
    while (r < array.length && array[r] < array[r++ - 1]) currentPeak++
    if (currentPeak > longestPeak) longestPeak = currentPeak
  }
  return longestPeak
}

const args = process.argv.slice(2)
const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
const result = longestPeak(array)
console.log(result)