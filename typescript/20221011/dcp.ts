/*

*/

export const sortKSortedArray = (array: number[], k: number): number[] => {
  for (let i = 0; i < array.length; i++) {
    const slice = array.slice(i, i + k + 1)
    const min = Math.min(...slice)
    const minIndex = array.indexOf(min, i)
    swap(array, i, minIndex)
  }
  return array
}

const swap = (array: number[], i: number, j: number): void => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

const args = process.argv.slice(2)
const array = [3, 2, 1, 5, 4, 7, 6, 5]
const k = 3
const result = sortKSortedArray(array, k)
console.log(result)
