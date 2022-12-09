/*
Given a sorted array of distinct integers and a target value, return the index 
if the target is found. If not, return the index where it would be if it were 
inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

export const searchInsert = (nums: number[], target: number): number => {
  if (target <= nums[0]) return 0
  if (target > nums[nums.length - 1]) return nums.length
  let left = 0
  let right = nums.length
  let middle: number
  while (true) {
    middle = Math.ceil((left + right) / 2)
    if (nums[middle] === target) return middle
    if (nums[middle] > target) {
      if (nums[middle - 1] < target) return middle
      else right = middle
    } else {
      if (nums[middle + 1] > target) return middle + 1
      else left = middle
    }
  }
}

const args = process.argv.slice(2)
const target = parseInt(args[0])
const nums = args.slice(1).map(Number)
const result = searchInsert(nums, target)
console.log(result)
