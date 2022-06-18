/*
Given a direction ('EAST' or 'WEST') and an array of integers representing building heights, return the indices of the building that would see the sunset when facing the sun in the given direction
*/

const sunsetViews = (buildings, direction) => {
    let indices = []
    if (buildings.length === 0) return indices
    if (direction === 'EAST') {
        for (let i = 0; i + 1 < buildings.length; i++) {
            let maxOfOthers = buildings[i + 1]
            for (let j = i + 1; j < buildings.length; j++) if (buildings[j] > maxOfOthers) maxOfOthers = buildings[j]
            if (buildings[i] > maxOfOthers) indices.push(i)
        }
        indices.push(buildings.length - 1)
    } else {
        for (let i = buildings.length; i - 1 >= 0; i--) {
            let maxOfOthers = buildings[i - 1]
            for (let j = i - 1; j >= 0; j--) if (buildings[j] > maxOfOthers) maxOfOthers = buildings[j]
            if (buildings[i] > maxOfOthers) indices.push(i)
        }
        indices.push(0)
    }
    return indices.sort((a, b) => a - b)
}

const args = process.argv.slice(2)
const direction = args[0]
const buildings = args.slice(1).map(Number)
const result = sunsetViews(buildings, direction)
console.log(result)