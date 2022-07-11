/*
Given an integer array and an integer to move, place all elements matching the integer to move to the end of the array.
Do this in-place and in linear time.
*/

const moveElementToEnd = (array, toMove) => {
  let index = array.length - 1
  while (array[index] === toMove) index--
  for (let i = 0; i < index; i++) {
    if (array[i] === toMove) {
      swap(array, i, index)
      while (array[index] === toMove) index--
    }
  }
  return array
}

const swap = (array, i, j) => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

const args = process.argv.slice(2)
const num = parseInt(args[0])
const array = args.map(Number).slice(1)
const result = moveElementToEnd(array, num)
console.log(result)