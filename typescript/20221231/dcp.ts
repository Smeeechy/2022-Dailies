/*
Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

export const findMaxConsecutiveOnes = (nums: number[]): number => {
  let max = 0
  let current = 0
  while (nums.length > 0) {
    if (nums.pop() === 1) max = Math.max(++current, max)
    else current = 0
  }
  return max
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = findMaxConsecutiveOnes(nums)
console.log(result)
