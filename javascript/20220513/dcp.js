/*
Implement a quickselect algorithm that completes in linear time on average.

More specifically, given an unordered set of integers and an integer k, find the kth smallest element in the set in linear time on average.
*/

const args = process.argv.slice(2)

const quickselect = (array, k, from, to) => {
    while (true) {
        if (array.length == 1) return array[0]
        const pivot = from
        let left = from + 1
        let right = to
        while (left <= right) {
            if (array[left] > array[pivot] && array[right] < array[pivot]) swap(array, left, right)
            if (array[left] <= array[pivot]) left++
            if (array[right] >= array[pivot]) right--
        }
        swap(array, pivot, right)
        if (right == k) return array[right]
        else if (right > k) to = right - 1
        else from = right + 1
    }
}

const swap = (array, x, y) => {
    let temp = array[x]
    array[x] = array[y]
    array[y] = temp
}

const k = parseInt(args[0])
const array = args.slice(1).map(Number)
const result = quickselect(array, k - 1, 0, array.length - 1)
console.log(result)