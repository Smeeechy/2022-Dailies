/*
You are given an array of integers. 
Return a new array where each index is the count of all elements to its right that are smaller than the element in the input array:
[8, 5, 11, -1, 3, 4, 2] ===> [5, 4, 4, 0, 1, 1, 0]
*/

const rightSmallerThan = array => {
  const result = new Array(array.length).fill(0)
  for (let i = array.length - 2; i >= 0; i--) {
    let count = 0
    let j = array.length - 1
    while (j > i) if (array[j--] < array[i]) count++
    result[i] = count
  }
  return result
}

const args = process.argv.slice(2)
const array = args.map(Number)
const result = rightSmallerThan(array)
console.log(result)
