/*
Given an integer array nums, move all 0's to the end of it while 
maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

export const moveZeroes = (nums: number[]): void => {
  let zeroCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) zeroCount++
    else {
      nums.push(...nums.splice(i - zeroCount, zeroCount))
      i -= zeroCount
      zeroCount = 0
    }
  }
}

const args = process.argv.slice(2)
const nums = args.map(Number)
moveZeroes(nums)
console.log(nums)
