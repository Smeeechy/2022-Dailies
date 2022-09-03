/*
You're given a grid of ones and zeros, and a integer source index.
In the grid, ones represent walls, zeros represent open spaces,
and the final row will always consist of only zeros.

Water will flow from the given source index of the first row of the grid.
Whenever it hits a wall below it it splits to its left and right (assuming
there aren't walls to block it). Your task is to determine how much water
ends up at each index in the last row of the grid.
*/

const waterfallStreams = (grid, source) => {
  grid[0][source] = -1

  let rowIndex = 1
  while (rowIndex < grid.length) {
    const upperRow = grid[rowIndex - 1]
    const lowerRow = grid[rowIndex]

    for (let columnIndex = 0; columnIndex < upperRow.length; columnIndex++) {
      // if there is water in a column in the upper row:
      if (upperRow[columnIndex] < 0) {
        // and there is not a wall below it:
        if (lowerRow[columnIndex] === 0) {
          // let the same amount of water flow down into that space
          lowerRow[columnIndex] = upperRow[columnIndex]
        } else {
          // otherwise, spread half the water left and half right until they either
          // encounter an empty space below them or they hit a wall
          const splitWaterVolume = upperRow[columnIndex] / 2
          for (let leftIndex = columnIndex - 1; leftIndex >= 0; leftIndex--) {
            if (upperRow[leftIndex] === 1) break
            if (lowerRow[leftIndex] === 0) {
              lowerRow[leftIndex] = splitWaterVolume
              break
            }
          }
          for (let rightIndex = columnIndex + 1; rightIndex < upperRow.length; rightIndex++) {
            if (upperRow[rightIndex] === 1) break
            if (lowerRow[rightIndex] === 0) {
              lowerRow[rightIndex] = splitWaterVolume
              break
            }
          }
        }
      }
    }
    rowIndex++
  }
  return grid[grid.length - 1].map(water => Math.abs(water) * 100)
}

const args = process.argv.slice(2)
// const grid = JSON.parse(args[0])
// const source = parseInt(args[1])
const grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
const source = 8
const result = waterfallStreams(grid, source)
console.log(result)
