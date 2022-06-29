/*
Implement the selection sort algorithm.
*/

const selectionSort = array => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) if (array[j] < array[minIndex]) minIndex = j
        swap(array, minIndex, i)
    }
    return array
}

const swap = (array, i, j) => {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

const args = process.argv.slice(2)
const nums = args.map(Number)
console.log(nums)
selectionSort(nums)
console.log(nums)