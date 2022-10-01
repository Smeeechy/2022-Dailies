/*
Given a 'sorted' array of distinct integers that has been shifted by some arbitrary
amount and a target integer, use a modified binary search algorithm to find the
index of the target in the array. If it does not exist in the array, return -1.
*/

// basically a standard binary search, but the decision to check the left or
// right half is not determined by the middle value alone. first figure out
// which half is continuous, then check whether or not the target could be in
// the continuous half. if so, check the continuous half, and if not, check
// the discontinuous half. break when left > right as usual.
const shiftedBinarySearch = (array: number[], target: number): number => {
  // standard binary search setup
  let left = 0
  let right = array.length - 1
  let middle = Math.floor((left + right) / 2)
  while (left <= right) {
    console.count('iterations')
    if (array[middle] === target) return middle

    if (array[left] <= array[middle]) {
      // check continuous left half
      if (array[left] <= target && target < array[middle]) right = middle - 1
      // check discontinuous right half
      else left = middle + 1
    } else {
      // check continuous right half
      if (array[middle] < target && target <= array[right]) left = middle + 1
      // check discontinuous left half
      else right = middle - 1
    }
    middle = Math.floor((left + right) / 2)
  }

  // target was not found
  return -1
}

const args = process.argv.slice(2)
const array = args.slice(1).map(Number)
const target = parseInt(args[0])
const result = shiftedBinarySearch(array, target)
console.log(result)
