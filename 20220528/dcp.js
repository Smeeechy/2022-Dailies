/*
implement a bubble sort algorithm
*/

// can't remember the last time i used a do-while so that's pretty neat
const bubbleSort = array => {
    let swapped
    do {
        swapped = false
        for (let i = 0; i + 1 < array.length; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1)
                swapped = true
                console.count('swaps')
            }
        }
    } while (swapped)
    return array
}

const swap = (array, i, j) => {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

const args = process.argv.slice(2)
const nums = args.map(Number)
console.log(bubbleSort(nums))