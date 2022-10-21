/*
Given a matrix, rotate it in-place.
*/

export const rotate = (matrix: number[][]): void => {
  for (let i = 0; i <= matrix.length / 2; i++) {
    let row = i
    let col = i

    // down
    while (row < matrix.length - i - 1) {
      swap(row, col, row + 1, col, matrix)
      row++
    }

    // right
    while (col < matrix[row].length - i - 1) {
      swap(row, col, row, col + 1, matrix)
      col++
    }

    // up
    while (row > i) {
      swap(row, col, row - 1, col, matrix)
      row--
    }

    // left
    while (col > i) {
      swap(row, col, row, col - 1, matrix)
      col--
    }
  }
}

const swap = (y1: number, x1: number, y2: number, x2: number, matrix: number[][]): void => {
  const temp = matrix[y1][x1]
  matrix[y1][x1] = matrix[y2][x2]
  matrix[y2][x2] = temp
}

const args = process.argv.slice(2)
// const matrix = JSON.parse(args[0])
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
rotate(matrix)
console.log(matrix)
