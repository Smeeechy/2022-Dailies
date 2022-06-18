/*
Given a list of points, a central point, and an integer k, find the nearest k points from the central point.

For example, given the list of points [(0, 0), (5, 4), (3, 1)], the central point (1, 2), and k = 2, return [(0, 0), (3, 1)].
*/

const args = process.argv.slice(2)
const points = JSON.parse(args[0])
const center = JSON.parse(args[1])
const k = parseInt(args[2])

const nearestKPoints = (points, center, k) => {
    const pointDistancesFromCenter = []
    for (const point of points) {
        const xDiff = center[0] - point[0]
        const yDiff = center[1] - point[1]
        // pythagorean theorem to find distance to center
        const distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff)
        pointDistancesFromCenter.push([distance, point])
    }
    // sorting by distance, then removing distance values, then returning the first k points
    return pointDistancesFromCenter.sort((a, b) => a[0] - b[0]).map(el => el[1]).slice(0, k)
}

const result = nearestKPoints(points, center, k)
console.log(result)