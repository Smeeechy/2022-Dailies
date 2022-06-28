/*
Given an unsorted list of at least three integers, return a sorted array of the largest three numbers without sorting the input array.
*/

const findThreeLargestNumbers = array => {
    const largest = [-Infinity, -Infinity, -Infinity]
    for (const arrayNum of array) {
        if (arrayNum >= largest[2]) {
            largest.shift()
            largest[2] = arrayNum
        } else if (arrayNum >= largest[1]) {
            largest.shift()
            largest[2] = largest[1]
            largest[1] = arrayNum
        } else if (arrayNum > largest[0]) {
            largest[0] = arrayNum
        }
    }
    return largest.filter(n => n !== -Infinity)
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = findThreeLargestNumbers(nums)
console.log(result)