/*
Given a circular array of integers, return an array containing the next greatest element for each index.
If there is no next greatest element, that index should contain -1.

[1, 3, 5, 3, 1] ==> [3, 5, -1, 5, 3]
*/

const nextGreaterElement = array => {
  const result = new Array(array.length).fill(-1)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      const index = (j + i) % array.length
      if (array[index] > array[i]) {
        result[i] = array[index]
        break
      }
    }
  }
  return result
}

const args = process.argv.slice(2)
const array = args.map(Number)
const result = nextGreaterElement(array)
console.log(result)