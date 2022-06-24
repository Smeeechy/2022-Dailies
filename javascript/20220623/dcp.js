/*
You're given an array of integers where each integer represents a jump of its value in the array. 
For instance, the integer 2 represents a jump of two indices forward in the array; 
the integer -3 represents a jump of three indices backward in the array.

Write a function that determines whether or not, starting at index 0, every index is visited exactly once before landing on index 0 again.
*/

const hasSingleCycle = array => {
    if (array[0] === 0 && array.length > 1) return false
    let index = 0
    let visited = []
    for (const _ of array) {
        visited.push(index)
        index = (index + array[index]) % array.length
        if (index < 0) index = array.length + index
    }
    return index === 0 && Math.max(...visited) === array.length - 1
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = hasSingleCycle(nums)
console.log(result)