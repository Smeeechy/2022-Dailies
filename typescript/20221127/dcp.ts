/*
Given an integer array nums, return the third distinct maximum number in this array. 
If the third maximum does not exist, return the maximum number.
*/

export const thirdMax = (nums: number[]): number => {
  const sortedDistinct = [...new Set(nums)].sort((a, b) => b - a)
  return sortedDistinct.length > 2 ? sortedDistinct[2] : sortedDistinct[0]
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = thirdMax(nums)
console.log(result)
