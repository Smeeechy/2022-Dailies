/*
Implement a Shell sort algorithm.
*/

export const shellSort = (nums: number[]): void => {
  let gap = Math.max(Math.floor((nums.length - 1) / 2), 1)
  while (true) {
    for (let i = gap; i < nums.length; i++) {
      const temp = nums[i]
      let j = i
      while (j >= gap && nums[j - gap] > temp) {
        nums[j] = nums[j - gap]
        j -= gap
      }
      nums[j] = temp
    }
    if (gap === 1) return
    gap = Math.max(Math.floor(gap / 2), 1)
  }
}

const args = process.argv.slice(2)
const nums = args.map(Number)
shellSort(nums)
console.log(nums)
