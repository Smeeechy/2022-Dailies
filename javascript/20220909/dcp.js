/*
Given a sorted array of integers and a target integer, find the lower and
upper bound of the range containing only the target integer.
You are expected to use a binary search algorithm for this problem.
*/

const searchForRange = (array, target) => {
  let minIndex, maxIndex, left, middle, right
  
  left = 0
  right = array.length - 1
  while (minIndex === undefined && left <= right) {
    middle = Math.floor((left + right) / 2)
    if (array[middle] < target) {
      left = middle + 1
    } else if (array[middle] > target) {
      right = middle - 1
    } else {
      if (middle === 0 || array[middle - 1] < target) minIndex = middle
      else right = middle - 1
    }
  }
  if (minIndex === undefined) return [-1, -1]

  left = 0
  right = array.length - 1
  while (maxIndex === undefined && left <= right) {
    middle = Math.floor((left + right) / 2)
    if (array[middle] < target) {
      left = middle + 1
    } else if (array[middle] > target) {
      right = middle - 1
    } else {
      if (middle === array.length - 1 || array[middle + 1] > target) maxIndex = middle
      else left = middle + 1
    }
  }
  if (maxIndex === undefined) return [-1, -1]

  return [minIndex, maxIndex]
}

const args = process.argv.slice(2)
// const target = parseInt(args[0])
// const array = args.slice(1).map(Number)
const target = 9
const array = [5, 7, 7, 8, 8, 10]
const result = searchForRange(array, target)
console.log(result)
