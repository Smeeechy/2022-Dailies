/*
Given an N by M matrix consisting only of 1's and 0's, find the largest rectangle containing only 1's and return its area.

For example, given the following matrix:

[[1, 0, 0, 0],
 [1, 0, 1, 1],
 [1, 0, 1, 1],
 [0, 1, 0, 0]]
Return 4.
*/

const args = process.argv.slice(2)
const rows = parseInt(args[0])
const cols = parseInt(args[1])
let m = [...args].slice(2)

// parse matrix
let matrix = []
for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < cols; j++) {
        const index = (cols * i) + j
        row.push(parseInt(m[index]))
    }
    matrix.push(row)
}

matrix.forEach(row => console.log(row))

let maxSquareArea = 0
for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[0].length; colIndex++) {
        if (matrix[rowIndex][colIndex] == 1) {
            let area = findAreaFromIndex(matrix, rowIndex, colIndex)
            if (area > maxSquareArea) {
                maxSquareArea = area
            }
        }
    }
}

console.log(maxSquareArea)

// find the largest area of contiguous 1s only moving down or right
function findAreaFromIndex(matrix, rowIndex, colIndex) {
    let area = 0
    let indicesToCheck = [[rowIndex, colIndex]]
    let checkedIndices = []
    while (indicesToCheck.length > 0) {
        let indices = indicesToCheck.pop()
        let y = indices[0]
        let x = indices[1]
        if (matrix[y][x] == 1) {
            area++
            if (x + 1 < matrix[0].length) {
                let checked = false
                for (const arr of checkedIndices) {
                    if (arr[0] == y && arr[1] == x + 1) {
                        checked = true
                        break
                    }
                }
                if (!checked) indicesToCheck.push([y, x + 1])
            } 
            if (y + 1 < matrix.length) {
                let checked = false
                for (const arr of checkedIndices) {
                    if (arr[0] == y + 1 && arr[1] == x) {
                        checked = true
                        break
                    }
                }
                if (!checked) indicesToCheck.push([y + 1, x])
            } 
        }
        checkedIndices.push([y, x])
    }
    return area
}