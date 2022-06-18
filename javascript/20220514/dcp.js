/*
Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
*/

const args = process.argv.slice(2)

const swap = (array, i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

// i think this is O(n log n) time but close enough
const quickSort = (array, from, to) => {
    if (to - from < 2) return
    let pivot = from
    let left = from + 1
    let right = to
    while (left <= right) {
        if ((array[left] == 'B' || array[left] == 'G') && array[right] == 'R') swap(array, left, right)
        if (array[left] == 'B' && (array[right] == 'R' || array[right] == 'G')) swap(array, left, right)
        if (array[left] == 'R' || array[left] == 'G') left++
        if (array[right] == 'B' || array[right] == 'G') right--
    }
    swap(array, pivot, right)
    quickSort(array, from, right - 1)
    quickSort(array, right + 1, to)
}

console.log(args)
quickSort(args, 0, args.length - 1)
console.log(args)