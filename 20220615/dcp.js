/*
Implement a merge sort algorithm.
*/

const mergeSort = array => {
    console.count('iterations')
    if (array.length === 1) return array
    else {
        const midpoint = Math.floor((array.length - 1) / 2) + 1
        const leftSubarray = array.slice(0, midpoint)
        const rightSubarray = array.slice(midpoint, array.length)
        const sortedLeftSubarray = mergeSort(leftSubarray)
        const sortedRightSubarray = mergeSort(rightSubarray)
        return merge(sortedLeftSubarray, sortedRightSubarray)
    }
}

const merge = (leftSubarray, rightSubarray) => {
    let leftIndex = 0
    let rightIndex = 0
    const merged = []
    while (leftIndex < leftSubarray.length || rightIndex < rightSubarray.length) {
        if (leftIndex === leftSubarray.length) merged.push(rightSubarray[rightIndex++])
        else if (rightIndex === rightSubarray.length) merged.push(leftSubarray[leftIndex++])
        else if (leftSubarray[leftIndex] < rightSubarray[rightIndex]) merged.push(leftSubarray[leftIndex++])
        else merged.push(rightSubarray[rightIndex++])
    }
    return merged
}

const args = process.argv.slice(2)
let nums
if (args.length === 1) {
    const count = parseInt(args[0])
    nums = Array.from({ length: count }, () => Math.floor(Math.random() * count * count))
} else nums = args.map(Number)
console.log(nums)
console.time('duration')
const sorted = mergeSort(nums)
console.timeEnd('duration')
console.log(sorted)
