/*
Implement the comb sort algorithm.
*/

// tries to improve on the biggest weaknesses of bubble sort
// by moving small values near the end of the list (turtles)
// to somewhere closer to the start, as well as large values
// near the start of the list (rabbits) to somewhere closer
// to the end. it's similar to bubble sort except the distance
// between elements being compared (referred to as the 'gap')
// starts off large and finishes at 1, decreasing by a predetermined
// 'shrink factor' every iteration. people much better at math
// than me have determined the ideal shrink factor is 1.3, so that's
// what i use here.
const combSort = (nums: number[]): void => {
  const shrinkFactor = 1.3
  let gap = nums.length
  let sorted = false

  while (!sorted) {
    gap = Math.floor(gap / shrinkFactor)
    if (gap < 1) {
      gap = 1
      sorted = true
    }

    for (let i = 0; i + gap < nums.length; i++) {
      if (nums[i] > nums[i + gap]) {
        swap(i, i + gap, nums)
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
combSort(nums)
console.log(nums)
