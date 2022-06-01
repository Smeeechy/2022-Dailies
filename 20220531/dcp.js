/*
find the longest continuous but not necessarily contiguous range in a given array of integers
*/

const largestRange = array => {
    const sorted = array.sort((a, b) => a - b)
    let maxRange = [sorted[0], sorted[0]]
    for (let i = 0; i + 1 < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const currentLength = sorted[j] - sorted[i]
            const maxLength = maxRange[1] - maxRange[0]
            if (isRange(sorted, i, j) && currentLength > maxLength) maxRange = [sorted[i], sorted[j]]
        }
    }
    return maxRange
}

const isRange = (array, start, end) => {
    let index = start
    while (index < end) {
        const current = array[index]
        const next = array[index + 1]
        if (next === current || next === current + 1) index++
        else return false
    }
    return true
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = largestRange(nums)
console.log(result)