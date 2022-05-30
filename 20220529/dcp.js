/*
find the largest possible value for the expression array[a] - array[b] + array[c] - array[d] where a < b < c < d
*/

const args = process.argv.slice(2)

const maximizeExpression = array => {
    let max
    for (let a = 0; a + 3 < array.length; a++) {
        for (let b = a + 1; b + 2 < array.length; b++) {
            for (let c = b + 1; c + 1 < array.length; c++) {
                for (let d = c + 1; d < array.length; d++) {
                    let value = array[a] - array[b] + array[c] - array[d]
                    if (max == null || value > max) max = value
                }
            }
        }
    }
    return max ?? 0
}

console.log(maximizeExpression(args.map(Number)))