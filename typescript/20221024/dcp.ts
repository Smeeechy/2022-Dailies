/*
Implement a basic odd-even sorting algorithm.
*/

// another relative of bubble sort that was designed to take advantage
// of parallel processing
export const oddEvenSort = (nums: number[]): void => {
  let sorted = false
  while (!sorted) {
    sorted = true
    // compare adjacent odd/even pairs
    for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        swap(i, i + 1, nums)
        sorted = false
      }
    }
    // compare adjacent even/odd pairs
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        swap(i, i + 1, nums)
        sorted = false
      }
    }
  }
}

const swap = (i: number, j: number, array: number[]): void => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

const args = process.argv.slice(2)
const nums = args.map(Number)
oddEvenSort(nums)
console.log(nums)
