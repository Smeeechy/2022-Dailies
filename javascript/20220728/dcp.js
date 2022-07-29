/*
Given the width and height of a grid, find the number of unique ways you can traverse it starting from the top left corner and ending in the bottom right corner.
You can only move down or right and only one cell at a time.
*/

const waysToTraverseGrid = (width, height) => {
  const paths = []
  traverseGrid(width, height, 0, 0, [], paths)
  return paths
}

const traverseGrid = (width, height, x, y, path, paths) => {
  path.push([x, y])
  if (x === width - 1 && y === height - 1) return paths.push(path)
  if (x < width) traverseGrid(width, height, x + 1, y, [...path], paths)
  if (y < height) traverseGrid(width, height, x, y + 1, [...path], paths)
}

const args = process.argv.slice(2)
const width = parseInt(args[0])
const height = parseInt(args[1])
const result = waysToTraverseGrid(width, height)
console.log(result)