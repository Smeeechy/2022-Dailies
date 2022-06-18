/*
implement kadane's algorithm
*/

// this is actually kadane's algorithm
const kadanesAlgorithm = array => {
    let maxEndingHere = array[0]
    let maxSoFar = array[0]
    for (let i = 1; i < array.length; i++) {
        const val = array[i]
        maxEndingHere = Math.max(maxEndingHere + val, val)
        maxSoFar = Math.max(maxSoFar, maxEndingHere)
    }
    return maxSoFar
}

// this was my brute-forced solution
const notKadanesAlgorithm = array => {
    let best = array[0]
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            let current = array.slice(i, j + 1).reduce((acc, curr) => acc += curr, 0)
            if (current > best) best = current
        }
    }
    return best
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = kadanesAlgorithm(nums)
console.log(result)