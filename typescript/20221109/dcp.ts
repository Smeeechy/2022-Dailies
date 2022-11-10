/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.
*/

export const setZeroes = (matrix: number[][]): void => {
  // make list of indices of zeroes
  const zeroes: number[][] = []
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) zeroes.push([row, col])
    }
  }

  // change rows and cols of zeroes to zeroes themselves
  for (const [zeroRow, zeroCol] of zeroes) {
    for (let row = 0; row < matrix.length; row++) matrix[row][zeroCol] = 0
    for (let col = 0; col < matrix[zeroRow].length; col++) matrix[zeroRow][col] = 0
  }
}

const args = process.argv.slice(2)
const matrix = JSON.parse(args[0])
setZeroes(matrix)
console.log(matrix)
