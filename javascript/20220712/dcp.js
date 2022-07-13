/*
Given a 2d matrix, return an array of its elements traversed in spiral order.
*/

const spiralTraverse = matrix => {
  const result = []
  const visited = []
  let row = 0
  let col = 0
  let direction = 'E'
  while (result.length < matrix.length * matrix[0].length) {
    result.push(matrix[row][col])
    visited.push(hash(row, col, matrix))
    const next = getNext(matrix, visited, row, col, direction)
    row = next[0]
    col = next[1]
    direction = next[2]
  }
  return result
}

const getNext = (matrix, visited, row, col, direction) => {
  switch (direction) {
    case 'E':
      if (
        col === matrix[0].length - 1 ||
        visited.includes(hash(row, col + 1, matrix))
      ) {
        return [row + 1, col, 'S']
      } else {
        return [row, col + 1, 'E']
      }
    case 'S':
      if (
        row === matrix.length - 1 ||
        visited.includes(hash(row + 1, col, matrix))
      ) {
        return [row, col - 1, 'W']
      } else {
        return [row + 1, col, 'S']
      }
    case 'W':
      if (col === 0 || visited.includes(hash(row, col - 1, matrix))) {
        return [row - 1, col, 'N']
      } else {
        return [row, col - 1, 'W']
      }
    case 'N':
      if (row === 0 || visited.includes(hash(row - 1, col, matrix))) {
        return [row, col + 1, 'E']
      } else {
        return [row - 1, col, 'N']
      }
    default:
      return null
  }
}

// i was hell-bent on getting this to work with a hashing algorithm so this is the result
const hash = (x, y, matrix) => (matrix[x][y] << (x + y)) + x + y

const args = process.argv.slice(2)
const matrix = JSON.parse(args[0])
const result = spiralTraverse(matrix)
console.log(result)
