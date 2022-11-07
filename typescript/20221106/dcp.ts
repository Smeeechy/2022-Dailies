/*
Given an array of integers and a value, remove all elements that equal that value
in-place and return the number of remaining elements.
*/

// js/ts really make this trivial but it's better than nothing
export const removeElement = (nums: number[], val: number): number => {
  for (let i = 0; i < nums.length; i++) if (nums[i] === val) nums.splice(i--, 1)
  return nums.length
}

const args = process.argv.slice(2)
const val = parseInt(args[0])
const nums = args.slice(1).map(Number)
const result = removeElement(nums, val)
console.log(nums, result)
