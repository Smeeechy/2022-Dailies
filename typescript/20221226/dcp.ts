/*
Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
*/

export const isToeplitzMatrix = (matrix: number[][]): boolean => {
  // diagonals starting left side bottom to top
  for (let startRow = matrix.length - 1; startRow >= 0; startRow--) {
    let row = startRow
    let col = 0
    const value = matrix[row][col]
    while (row < matrix.length && col < matrix[row].length) {
      if (matrix[row++][col++] !== value) return false
    }
  }

  // diagonals starting top row left to right
  for (let startCol = 1; startCol < matrix[0].length; startCol++) {
    let row = 0
    let col = startCol
    const value = matrix[row][col]
    while (row < matrix.length && col < matrix[row].length) {
      if (matrix[row++][col++] !== value) return false
    }
  }

  return true
}

const args = process.argv.slice(2)
const matrix = JSON.parse(args[0])
const result = isToeplitzMatrix(matrix)
console.log(result)
