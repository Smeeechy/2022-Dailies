/*

*/

const quicksort = (array, from = 0, to = array.length - 1) => {
  if (from > to) return
  const partitionIndex = partition(array, from, to)
  quicksort(array, from, partitionIndex - 1)
  quicksort(array, partitionIndex + 1, to)
}

const partition = (array, from, to) => {
  let pivot = array[to]
  let i = from - 1
  for (let j = from; j < to; j++) {
    if (array[j] < pivot) {
      i++
      swap(array, i, j)
    }
  }
  swap(array, i + 1, to)
  return i + 1
}

const swap = (array, i, j) => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

const args = process.argv.slice(2)
const array = args.map(Number)
console.log(array)
quicksort(array)
console.log(array)
