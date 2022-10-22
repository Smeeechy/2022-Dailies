/*
Implement a recursive bubble sort.
*/

// has science gone too far
export const bubbleSortRecursive = (nums: number[], to: number = nums.length): void => {
  if (to === 1) return
  for (let i = 0; i + 1 < to; i++) if (nums[i + 1] < nums[i]) swap(i, i + 1, nums)
  bubbleSortRecursive(nums, to - 1)
}

const swap = (i: number, j: number, array: number[]): void => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

const args = process.argv.slice(2)
const nums = args.map(Number)
bubbleSortRecursive(nums)
console.log(nums)
