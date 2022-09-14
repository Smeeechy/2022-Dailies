/*
Given a matrix of integers, return an array containing each element when traversed in a
zig-zag pattern starting in the top-left corner. For example:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]
yields [1, 5, 2, 3, 6, 9, 13, 10, 7, 4, 8, 11, 14, 15, 12, 16]
*/

const zigzagTraverse = matrix => {
  const result = []
  const rows = matrix.length
  const cols = matrix[0].length
  let traversingUpRight = false
  let row = 0
  let col = 0
  while (true) {
    result.push(matrix[row][col])

    // hit bottom right corner and is finished
    if (row === rows - 1 && col === cols - 1) break

    if (traversingUpRight) {
      if (col === cols - 1) { // hit right border
        row++
        traversingUpRight = false
      } else if (row === 0) { // hit upper border
        col++
        traversingUpRight = false
      } else {
        row--
        col++
      }
    } else {
      if (row === rows - 1) { // hit bottom border
        col++
        traversingUpRight = true
      } else if (col === 0) { // hit left border
        row++
        traversingUpRight = true
      } else {
        row++
        col--
      }
    }
  }
  return result
}

const args = process.argv.slice(2)
const matrix = [
  [1, 3, 4, 10],
  [2, 5, 9, 11],
  [6, 8, 12, 15],
  [7, 13, 14, 16]
]
const result = zigzagTraverse(matrix)
console.log(result)