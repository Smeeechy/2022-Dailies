/*
You are given row x col grid representing a map where grid[i][j] = 1 represents 
land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is 
completely surrounded by water, and there is exactly one island (i.e., one or 
more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to 
the water around the island. One cell is a square with side length 1. The grid 
is rectangular, width and height don't exceed 100. Determine the perimeter of 
the island.
*/

export const islandPerimeter = (grid: number[][]): number => {
  let perimeter = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 0) continue
      let cellPerimeter = 4
      if (row > 0 && grid[row - 1][col] === 1) cellPerimeter--
      if (grid[row][col - 1] === 1) cellPerimeter--
      if (grid[row][col + 1] === 1) cellPerimeter--
      if (row < grid.length - 1 && grid[row + 1][col] === 1) cellPerimeter--
      perimeter += cellPerimeter
    }
  }
  return perimeter
}

const args = process.argv.slice(2)
const grid = JSON.parse(args[0])
const result = islandPerimeter(grid)
console.log(result)
