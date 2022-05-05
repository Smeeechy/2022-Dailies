/*
You're given an array of non-negative integers where each non-zero integer
represents the height of a pillar of width 1. Imagine water being
poured over all of the pillars; write a function that returns the surface area
of the water trapped between the pillars viewed from the front. Note that
spilled water should be ignored.
*/

// this is not complete but i ran out of time for today sorry

const args = process.argv.slice(2)
const heights = args.map(Number)
const result = waterArea(heights)
console.log(result)

// TODO: continue adding left and right areas until there is no more water to add
function waterArea(heights) {
    let max = getMax(heights)
    let leftMax = getMax(heights.slice(0, max[0]))
    let rightMax = getMax(heights.slice(max[0] + 1), max[0] + 1)
    let area = getArea(heights, leftMax, max, rightMax)
    return area
}

// return index and value of tallest pillar in list
// can account for right-side offset
function getMax(heights, offset = 0) {
    let max = [-1, -1]
    for (let index in heights) {
        if (heights[index] > max[1]) max = [parseInt(index) + offset, heights[index]]
    }
    return max
}

// returns flooded area between given tallest and its next tallest left and right neighbors
function getArea(heights, leftMax, max, rightMax) {
    // multiplying distance between maximums by the lesser maximum to get the rough square area
    let leftArea = (max[0] - leftMax[0] - 1) * leftMax[1]
    let rightArea = (rightMax[0] - max[0] - 1) * rightMax[1]
    // accounting for submerged pillars
    for (let i = leftMax[0] + 1; i < max[0]; i++) leftArea -= heights[i]
    for (let i = max[0] + 1; i < rightMax[0]; i++) rightArea -= heights[i]
    
    return leftArea + rightArea
}