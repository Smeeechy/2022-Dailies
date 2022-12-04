/*
Given an integer array nums of 2n integers, group these integers 
into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum 
of min(ai, bi) for all i is maximized. Return the maximized sum.
*/

export const arrayPairSum = (nums: number[]): number => {
  nums.sort((a, b) => a - b)
  const pairs: number[][] = []
  for (let i = 0; i < nums.length; i += 2) pairs.push([nums[i], nums[i + 1]])
  return pairs.reduce((acc, next) => (acc += Math.min(...next)), 0)
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = arrayPairSum(nums)
console.log(result)
