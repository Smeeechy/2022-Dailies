/*
Given an array of integers, find the indices of the smallest subarray that must be sorted in order for the array to become sorted:
[1, 2, 3, 6, 5, 4, 7, 8, 9] ===> [3, 5] because the only numbers that need to be sorted are 6, 5, and 4.
*/

const subarraySort = array => {
  let [indexMin, indexMax] = [-1, -1]
  for (let index = 0; index < array.length; index++) {
    const num = array[index]
    if (isDisordered(array, index)) {
      if (indexMax === -1 || num > array[indexMax]) indexMax = index
      if (indexMin === -1 || num < array[indexMin]) indexMin = index
    }
  }
  if (indexMin === -1 && indexMax === -1) return [-1, -1]
  return [findSortedMinIndex(array, indexMin), findSortedMaxIndex(array, indexMax)]
}

const isDisordered = (array, index) => {
  const num = array[index]
  let disordered = false
  if (index === 0 && num > array[index + 1]) disordered = true
  else if (index === array.length - 1 && num < array[index - 1]) disordered = true
  else if (num < array[index - 1] || num > array[index + 1]) disordered = true
  return disordered
}

const findSortedMinIndex = (array, index) => {
  for (let sortedIndex = 0; sortedIndex < array.length; sortedIndex++) {
    if (array[sortedIndex] > array[index]) return sortedIndex
  }
}

const findSortedMaxIndex = (array, index) => {
  for (let sortedIndex = array.length - 1; sortedIndex >= 0; sortedIndex--) {
    if (array[sortedIndex] < array[index]) return sortedIndex
  }
}

const args = process.argv.slice(2)
const array = args.map(Number)
const result = subarraySort(array)
console.log(result)
