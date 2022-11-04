/*
Given an array of integers, find the next lexicographical permutation of the array.
If no next permutation exists, return the first lexicographical permutation.
*/

export const nextPermutation = (nums: number[]): void => {
  // find first element outside of longest non-increasing suffix
  let pivotIndex = nums.length - 2
  while (nums[pivotIndex] >= nums[pivotIndex + 1]) pivotIndex--

  // find pivot's rightmost greater element in suffix
  const pivot = nums[pivotIndex]
  let otherIndex = -1
  for (let i = pivotIndex + 1; i < nums.length; i++) if (nums[i] > pivot) otherIndex = i

  // reverse entire array if no next permutation exists (effectively sorting it)
  if (otherIndex === -1) nums.reverse()
  else {
    // swap pivot and next greatest element
    nums[pivotIndex] = nums[otherIndex]
    nums[otherIndex] = pivot
    // reverse suffix only
    nums.push(...nums.splice(pivotIndex + 1).reverse())
  }
}

const args = process.argv.slice(2)
const nums = args.map(Number)
nextPermutation(nums)
console.log(nums)
