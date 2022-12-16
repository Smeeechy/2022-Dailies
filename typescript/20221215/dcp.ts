/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

export const singleNumber = (nums: number[]): number => {
  let result = 0
  for (const num of nums) result ^= num
  return result
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = singleNumber(nums)
console.log(result)
