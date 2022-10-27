/*
Given a sorted array of integers, remove all duplicate values from the array
and return the length of the new array using constant space.
*/

export const removeDuplicates = (nums: number[]): number => {
  let current = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === current) nums[i] = -Infinity
    else current = nums[i]
  }
  let slot = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== -Infinity) {
      nums[slot] = nums[i]
      if (slot !== i) nums[i] = -Infinity
      slot++
    }
  }
  return slot
}

const args = process.argv.slice(2)
const nums = args.map(Number)
nums.length = removeDuplicates(nums)
console.log(nums)
