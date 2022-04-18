/*
Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the 
two elements that appear only once.

For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

Follow-up: Can you do this in linear time and constant space?
*/

const args = process.argv.slice(2)
const nums = args.map(n => parseInt(n))
const result = uniqueTwoNaive(nums)
console.log('result:', result)

function uniqueTwoNaive(_nums) {
    const nums = [..._nums]
    let arr = []
    for (const num of nums) {
        const index = arr.indexOf(num)
        if (index > -1) {
            arr.splice(index, 1)
        } else arr.push(num)
    }
    return arr
}
