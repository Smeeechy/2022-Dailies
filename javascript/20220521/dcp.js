/*
find a square of 0s in a matrix of only 1s and 0s
*/

const args = process.argv.slice(2)
const matrix = JSON.parse(args[0])

// given a starting point and a length, return true if that 0s square exists in the matrix
const hasSquare = (matrix, topLeftPoint, length) => {
    let [x, y] = topLeftPoint
    for (let row = y; row < y + length; row++) {
        for (let col = x; col < x + length; col++) {
            const current = matrix[row][col]
            if ((row == y || row == y + length - 1 || col == x || col == x + length - 1) && current != 0) return false
        }
    }
    return true
}

// check for squares with every starting point if length is 2 or more
const squareOfZeroes = matrix => {
    const rows = matrix.length
    const cols = matrix[0].length
    for (let row = 0; row < rows - 1; row++) {
        for (let col = 0; col < cols - 1; col++) {
            const maxLength = Math.min(cols - col, rows - row)
            if (maxLength >= 2) {
                for (let length = 2; length <= maxLength; length++) {
                    if (hasSquare(matrix, [col, row], length)) return true
                }
            }
        }
    }
    return false
}

console.log(squareOfZeroes(matrix))