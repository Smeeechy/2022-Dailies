/*
Given two strings, find their Levenshtein distance.

That is, find the minimum number of insertions, deletions or substitutions of single characters necessary to make the second match the first.
*/

function levenshteinDistance(str1, str2) {
    const rows = str1.length
    const cols = str2.length
    const table = []
    for (let row = 0; row <= rows; row++) {
        table.push([])
        for (let col = 0; col <= cols; col++) {
            if (row === 0 && col === 0) {
                table[row][col] = 0
                continue
            }

            let last
            if (row === 0) last = table[row][col - 1] + 1
            else if (col === 0) last = table[row - 1][col] + 1
            else {
                if (str1[row - 1] === str2[col - 1]) last = table[row - 1][col - 1]
                else last = Math.min(table[row - 1][col], table[row - 1][col - 1], table[row][col - 1]) + 1
            }
            table[row][col] = last
        }
    }
    console.table(table)
    return table[rows][cols]
}

const args = process.argv.slice(2)
const str1 = args[0]
const str2 = args[1]
const result = levenshteinDistance(str1, str2)
console.log(result)