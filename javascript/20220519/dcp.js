/*
There is an N by M matrix of zeroes. Given N and M, write a function to count the number of ways of starting at the top-left corner and getting to the bottom-right corner. You can only move right or down.

For example, given a 2 by 2 matrix, you should return 2, since there are two ways to get to the bottom-right:

Right, then down
Down, then right
Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.
*/

const args = process.argv.slice(2)
const [n, m] = args.map(Number)

const getPaths = (allPaths, currentPath, x, y, endX, endY) => {
    currentPath.push([x, y])
    if (x == endX - 1 && y == endY - 1) {
        allPaths.push(currentPath)
    }
    if (x + 1 < endX) getPaths(allPaths, [...currentPath], x + 1, y, endX, endY)
    if (y + 1 < endY) getPaths(allPaths, [...currentPath], x, y + 1, endX, endY)
}

const drawPath = path => {
    const [xMax, yMax] = path[path.length - 1]
    const grid = new Array(yMax + 1).fill('.').map(_ => new Array(xMax + 1).fill('.'))
    for (const loc of path) {
        const [x, y] = loc
        grid[y][x] = 'X'
    }
    console.log(grid)
}

const result = []
getPaths(result, [], 0, 0, n, m)
result.forEach(path => drawPath(path))