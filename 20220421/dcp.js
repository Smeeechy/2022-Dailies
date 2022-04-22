/*
You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers. 
For example, [[1], [2, 3], [1, 5, 1]] represents the triangle:

  1
 2 3
1 5 1

We define a path in the triangle to start at the top and go down one row at a time to an adjacent value, eventually 
ending with an entry on the bottom row. For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

Write a program that returns the weight of the maximum weight path.
*/

const args = process.argv.slice(2)
const rows = parseRows(args)

const result = maxWeight(rows, 0, 0, 0)
for (const row of rows) console.log(row)
console.log(result)

function maxWeight(rows, rowIndex, colIndex, accTotal) {
    const val = rows[rowIndex][colIndex] + accTotal
    if (rowIndex == rows.length - 1) {
        return val
    } else {
        return Math.max(maxWeight(rows, rowIndex + 1, colIndex    , val), 
                        maxWeight(rows, rowIndex + 1, colIndex + 1, val))
    }
}

function parseRows(nums) {
    let size = 1
    let rows = []
    let row = []
    for (const num of nums) {
        row.push(parseInt(num))
        if (row.length == size) {
            rows.push([...row])
            row = []
            size++
        }
    }
    return rows
}
