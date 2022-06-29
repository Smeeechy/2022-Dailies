/*
Given a list of integers, find all triplets of elements that add up to a target sum.
*/

function threeNumberSum(array, targetSum) {
    const results = []
    array = array.sort((a, b) => a - b)
    for (let i = 0; i + 2 < array.length; i++) {
        for (let j = i + 1; j + 1 < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] === targetSum) {
                    results.push([array[i], array[j], array[k]])
                }
            }
        }
    }
    return results
}

const args = process.argv.slice(2)
const target = parseInt(args[0])
const nums = args.slice(1).map(Number)
const result = threeNumberSum(nums, target)
console.log(result)