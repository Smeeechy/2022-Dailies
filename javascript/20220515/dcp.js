/*
Given a list of cartesian coordinates, find the most points a single line can pass through
*/

const args = process.argv.slice(2)

const lineFromPoints = (p1, p2) => {
    const diffY = p2[1] - p1[1]
    const diffX = p2[0] - p1[0]
    const m = diffY / diffX
    const b = p1[1] - m * p1[0]

    const isIntersecting = (x, y) => {
        if (Math.abs(m) == Number.POSITIVE_INFINITY) return x == p1[0]
        let actual = Math.round(y * 100) / 100
        let estimated = Math.round((m * x + b) * 100) / 100
        return actual == estimated
    }

    return { m, b, isIntersecting }
}

const lineThroughPoints = (points, logResults = false) => {
    let best = {m: null, b: null, intersects: []}
    if (points.length < 3) return { ...best, intersects: [...points] }
    let results = []
    for (let i = 0; i + 1 < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let intersects = []
            const p1 = points[i]
            const p2 = points[j]
            const { m, b, isIntersecting } = lineFromPoints(p1, p2)
            for (let point of points) {
                if (isIntersecting(...point)) {
                    intersects.push(point)
                }
            }
            results.push({ m, b, intersects })
            if (intersects.length > best.intersects.length) best = { m, b, intersects }
        }
    }
    if (logResults) results.sort((x, y) => x.m - y.m).forEach(result => console.log(result))
    return best
}

const points = JSON.parse(args)
const result = lineThroughPoints(points)
console.log('best: ', result)