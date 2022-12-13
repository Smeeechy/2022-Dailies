/*
Given an integer numRows, return the first numRows of Pascal's triangle.
*/

export const generate = (numRows: number): number[][] => {
  if (numRows === 0) return []
  const triangle: number[][] = [[1]]
  for (let i = 1; i < numRows; i++) {
    const lastRow = triangle[i - 1]
    const newRow: number[] = []
    for (let j = 0; j <= lastRow.length; j++) newRow[j] = (lastRow[j - 1] ?? 0) + (lastRow[j] ?? 0)
    triangle.push(newRow)
  }
  return triangle
}

const args = process.argv.slice(2)
const numRows = parseInt(args[0])
const result = generate(numRows)
console.log(result)
