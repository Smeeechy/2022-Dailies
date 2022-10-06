/*
Given a matrix and a size, determine the maximum sum that can be found by adding all elements
of a submatrix with dimensions size * size. The given matrix will always have dimensions
of at least size * size.
*/

export const maximumSumSubmatrix = (matrix: number[][], size: number): number => {
  let best = -Infinity
  for (let row = 0; row <= matrix.length - size; row++) {
    for (let col = 0; col <= matrix[0].length - size; col++) {
      let current = 0
      for (let rowOffset = 0; rowOffset < size; rowOffset++) {
        for (let colOffset = 0; colOffset < size; colOffset++) {
          current += matrix[row + rowOffset][col + colOffset]
        }
      }
      if (current > best) best = current
    }
  }
  return best
}

const args = process.argv.slice(2)
const matrix = JSON.parse(args[0])
const size = parseInt(args[1])
const result = maximumSumSubmatrix(matrix, size)
console.log(result)
