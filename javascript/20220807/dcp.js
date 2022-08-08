/*
Given a matrix of ones and zeros, with ones representing land and zeros representing water, remove all islands from the matrix in-place.
An "island" is defined as a group of non-diagonally contiguous ones that do not touch the outer border of the matrix.
*/

const removeIslands = matrix => {
  const islands = findIslands(matrix)
  for (let island of islands) {
    for (let [row, col] of island) {
      matrix[row][col] = 0
    }
  }
  return matrix
}

// return an array of arrays of coordinates for each island
const findIslands = matrix => {
  const islands = []

  // matrix of booleans for whether or not a cell has already been checked
  const visited = new Array(matrix.length)
    .fill()
    .map(_ => new Array(matrix[0].length).fill(false))

  for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[0].length - 1; col++) {
      if (matrix[row][col] === 1 && !visited[row][col]) {
        visited[row][col] = true
        let valid = true
        const island = [[row, col]]
        const toCheck = [...neighbors(matrix, row, col)]
        while (toCheck.length > 0) {
          const [cRow, cCol] = toCheck.pop()
          const newNeighbors = neighbors(matrix, cRow, cCol)
            .filter(([nRow, nCol]) => !visited[nRow][nCol])
          toCheck.push(...newNeighbors)
          if (isBoundary(matrix, cRow, cCol)) valid = false
          visited[cRow][cCol] = true
          island.push([cRow, cCol])
        }
        if (valid) islands.push(island)
      }
    }
  }
  return islands
}

// returns an array of neighboring 1s
const neighbors = (matrix, row, col) => {
  return [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1]
  ].filter(([nRow, nCol]) =>
    nRow >= 0 &&
    nRow < matrix.length &&
    nCol >= 0 &&
    nCol < matrix[0].length
  ).filter(([nRow, nCol]) => matrix[nRow][nCol] === 1)
}

// returns whether or not the given cell is on the matrix boundary
const isBoundary = (matrix, row, col) => {
  return (
    row === 0 ||
    row === matrix.length - 1 ||
    col === 0 ||
    col === matrix[0].length - 1
  )
}

const args = process.argv.slice(2)
const matrix = JSON.parse(args[0])
removeIslands(matrix)
console.log(matrix)