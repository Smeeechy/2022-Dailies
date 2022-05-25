/*
Given an array of integers representing pillar heights, write a function that finds the maximum area of water trapped between pillars when viewed from the front
*/

const waterArea = heights => {
    if (heights.length == 0) return 0
    let maxIndex = maxInRange(heights, 0, heights.length)
    return getLeftArea(heights, maxIndex) + getRightArea(heights, maxIndex)
}

const getLeftArea = (heights, index) => {
    if (index == 0) return 0
    let nextMax = maxInRange(heights, 0, index)
    return areaBetween(heights, nextMax, index) + getLeftArea(heights, nextMax)
}

const getRightArea = (heights, index) => {
    if (index == heights.length - 1) return 0
    let nextMax = maxInRange(heights, index + 1, heights.length)
    return areaBetween(heights, index, nextMax) + getRightArea(heights, nextMax)
}

const areaBetween = (arr, start, end) => {
    let total = 0
    let height = Math.min(arr[start], arr[end])
    for (let i = start + 1; i < end; i++) {
        total += height - arr[i]
    }
    return total
}

const maxInRange = (arr, start, end) => {
    let max = [-1, -1]
    for (let i = start; i < end; i++) if (arr[i] > max[1]) max = [i, arr[i]]
    return max[0]
}

const args = process.argv.slice(2)
const heights = args.map(Number)
const result = waterArea(heights)
console.log(result)