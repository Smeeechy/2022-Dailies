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
  // placing the water source
  grid[0][source] = -1

  let rowIndex = 1
  while (rowIndex < grid.length) {
    const upperRow = grid[rowIndex - 1]
    const lowerRow = grid[rowIndex]

    for (let columnIndex = 0; columnIndex < upperRow.length; columnIndex++) {
      // if there is water in a column in the upper row,
      if (upperRow[columnIndex] < 0) {
        // and there is not a wall below it,
        if (lowerRow[columnIndex] < 1) {
          // let the same amount of water flow down into that space
          lowerRow[columnIndex] += upperRow[columnIndex]
        } else {
          // otherwise, split the water volume
          const splitWaterVolume = upperRow[columnIndex] / 2

          // pass half of it to the left until it can fall into an
          // empty space below it or it hits a wall and gets stuck
          let leftIndex = columnIndex - 1
          while (leftIndex >= 0) {
            if (upperRow[leftIndex] === 1) break
            else if (lowerRow[leftIndex] < 1) {
              lowerRow[leftIndex] += splitWaterVolume
              break
            } else leftIndex--
          }

          // and pass the other half to the right just the same
          let rightIndex = columnIndex + 1
          while (rightIndex < lowerRow.length) {
            if (upperRow[rightIndex] === 1) break
            else if (lowerRow[rightIndex] < 1) {
              lowerRow[rightIndex] += splitWaterVolume
              break
            } else rightIndex++
          }
        }
      }
    }
    rowIndex++
  }
  
  // return the volume in the last row as a percentage of the total
  return grid[grid.length - 1].map(water => Math.abs(water) * 100)
}

const args = process.argv.slice(2)
const grid = JSON.parse(args[0])
const source = parseInt(args[1])
const result = waterfallStreams(grid, source)
console.log(result)
