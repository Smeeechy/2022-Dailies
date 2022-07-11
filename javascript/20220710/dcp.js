/*
Write a function to find how many passes through a 2d integer matrix are required to convert all numbers to their positive values.
A number can be converted if it has at least one positive neighbor.
Zeros do not count as positive or negative, therefore they cannot convert neighbors but also do not require conversion themselves.
If a matrix cannot be converted to all positives, return -1.
*/

const minimumPassesOfMatrix = matrix => {
  let passes = 0
  while (true) {
    let newMatrix = matrix.map(row => row.slice())
    let done = true
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] < 0) {
          done = false
          if (canBeNegated(matrix, row, col)) newMatrix[row][col] *= -1
          else if (allZeroNeighbors(matrix, row, col)) return -1
        }
      }
    }
    if (!done) {
      matrix = newMatrix
      passes++
    } else return passes
  }
}

const canBeNegated = (matrix, row, col) => {
  const neighbors = [
    row === 0 ? null : matrix[row - 1][col],
    row === matrix.length - 1 ? null : matrix[row + 1][col],
    col === 0 ? null : matrix[row][col - 1],
    col === matrix[0].length ? null : matrix[row][col + 1]
  ].filter(n => n > 0)
  return neighbors.length > 0
}

const allZeroNeighbors = (matrix, row, col) => {
  const neighbors = [
    row === 0 ? null : matrix[row - 1][col],
    row === matrix.length - 1 ? null : matrix[row + 1][col],
    col === 0 ? null : matrix[row][col - 1],
    col === matrix[0].length ? null : matrix[row][col + 1]
  ].filter(n => n)
  return neighbors.every(n => n === 0)
}

const args = process.argv.slice(2)
const matrix = JSON.parse(args[0])
const result = minimumPassesOfMatrix(matrix)
console.log(result)
