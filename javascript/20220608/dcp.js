/*
given a sorted array of distinct integers, return the first index where array[index] == index, or -1 if not found
*/

const indexEqualsValue = array => {
    let minIndex
    array.forEach((value, index) => { if (minIndex === undefined && value === index) minIndex = index })
    return minIndex ?? -1
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = indexEqualsValue(nums)
console.log(result)