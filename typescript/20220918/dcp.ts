/*
Given an array of integers representing building heights, find the area of largest 
rectangle that can be created within the skyline created by the buildings.
*/

export const largestRectangleUnderSkyline = (buildings: number[]): number => {
  let max = 0
  for (let i = 0; i < buildings.length; i++) {
    let currentBest = buildings[i]
    let left = i - 1
    while (left >= 0 && buildings[left--] >= buildings[i]) currentBest += buildings[i]
    let right = i + 1
    while (right < buildings.length && buildings[right++] >= buildings[i]) currentBest += buildings[i]
    if (currentBest > max) max = currentBest
  }
  return max
}

const args = process.argv.slice(2)
const buildings = args.map(Number)
const result = largestRectangleUnderSkyline(buildings)
console.log(result)