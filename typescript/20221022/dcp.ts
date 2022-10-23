/*
Implement the gnome sort algorithm.
*/

const gnomeSort = (nums: number[]): void => {
  let pos = 0
  while (pos < nums.length) {
    if (pos === 0 || nums[pos] >= nums[pos - 1]) pos++
    else swap(pos, --pos, nums)
  }
}

const swap = (i: number, j: number, array: number[]): void => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

const args = process.argv.slice(2)
const nums = args.map(Number)
gnomeSort(nums)
console.log(nums)
