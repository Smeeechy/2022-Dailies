/*
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.
*/

export const missingNumber = (nums: number[]): number => {
  // Faulhaber's Formula
  const a = (nums.length * nums.length + nums.length) / 2
  const sum = nums.reduce((acc, next) => acc + next, 0)
  return a - sum
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = missingNumber(nums)
console.log(result)
