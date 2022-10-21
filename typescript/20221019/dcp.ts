/*
Given a matrix, rotate it in-place.
*/

const rotate = (matrix: number[][]): void => {
  for (let i = 0; i <= matrix.length / 2; i++) {
    for (let j = 1; j < matrix[i].length - 2 * i; j++) {
      let row = i
      let col = i
      while (row < matrix.length - i - 1) swap(row, col, ++row, col, matrix)
      while (col < matrix[row].length - i - 1) swap(row, col, row, ++col, matrix)
      while (row > i) swap(row, col, --row, col, matrix)
      while (col > i + 1) swap(row, col, row, --col, matrix)
    }
  }
}

const swap = (y1: number, x1: number, y2: number, x2: number, matrix: number[][]): void => {
  const temp = matrix[y1][x1]
  matrix[y1][x1] = matrix[y2][x2]
  matrix[y2][x2] = temp
}

const args = process.argv.slice(2)
const matrix = JSON.parse(args[0])
rotate(matrix)
console.log(matrix)
