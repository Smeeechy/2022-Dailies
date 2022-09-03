/*
Given a matrix of ones and zeros where zeros are land and ones are water, determine
the length of all non-diagonally connected water spaces (rivers) in the matrix.
*/

const riverSizes = matrix => {
  const riverSizes = []
  const visited = {}
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
      const coords = [rowIndex, colIndex]
      if (!(coords in visited) && matrix[rowIndex][colIndex]) {
        let riverSize = 0
        const neighbors = [coords]
        while (neighbors.length > 0) {
          const neighbor = neighbors.pop()
          if (visited[neighbor]) continue
          visited[neighbor] = true
          riverSize++
          neighbors.push(...newNeighbors(matrix, visited, ...neighbor))
        }
        riverSizes.push(riverSize)
      }
    }
  }
  return riverSizes
}

const newNeighbors = (matrix, visited, row, col) => {
  const result = []
  const up = [row - 1, col]
  const down = [row + 1, col]
  const left = [row, col - 1]
  const right = [row, col + 1]
  if (
    row - 1 >= 0 &&
    !(up in visited) &&
    matrix[row - 1][col]
  ) result.push(up)
  if (
    row + 1 < matrix.length &&
    !(down in visited) &&
    matrix[row + 1][col]
  ) result.push(down)
  if (
    col - 1 >= 0 &&
    !(left in visited) &&
    matrix[row][col - 1]
  ) result.push(left)
  if (
    col + 1 < matrix[0].length &&
    !(right in visited) &&
    matrix[row][col + 1]
  ) result.push(right)
  return result
}

const args = process.argv.slice(2)
const matrix = JSON.parse(args[0])
const result = riverSizes(matrix)
console.log(result)