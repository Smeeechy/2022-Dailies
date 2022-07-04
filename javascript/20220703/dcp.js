/*
Implement a binary search algorithm.
*/

const binarySearch = (array, target) => {
    let l = 0
    let r = array.length - 1
    while (l <= r) {
        let m = parseInt((l + r) / 2)
        if (array[m] < target) l = m + 1
        else if (array[m] > target) r = m - 1
        else return m
    }
    return -1
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const target = nums.shift()
const result = binarySearch(nums, target)
console.log(result)