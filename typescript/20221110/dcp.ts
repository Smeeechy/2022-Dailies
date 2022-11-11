/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix. 
This matrix has the following properties:
- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.
*/

// i remembered this algorithm from an algoexpert prompt i got a while back
// but i don't remember the name of it
export const searchMatrix = (matrix: number[][], target: number): boolean => {
  let row = matrix.length - 1
  let col = matrix[row].length - 1

  while (true) {
    if (matrix[row][col] === target) return true
    if (row > 0 && matrix[row - 1][col] >= target) row--
    else if (col > 0) col--
    else return false
  }
}

const args = process.argv.slice(2)
const matrix = JSON.parse(args[0])
const target = parseInt(args[1])
const result = searchMatrix(matrix, target)
console.log(result)
