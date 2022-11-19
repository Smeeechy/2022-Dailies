/*
Write a function that returns the convolution of two sets of integers of equal length.
*/

export const convolve = (first: number[], second: number[]): number[] => {
  // creating a multiplication table
  const table = new Array(first.length).fill(0).map(_ => new Array(second.length).fill(0))
  for (let row = 0; row < first.length; row++) {
    for (let col = 0; col < second.length; col++) {
      table[row][col] = first[row] * second[col]
    }
  }

  // summing diagonals of table
  const result: number[] = []
  for (let i = 0; i < first.length + second.length - 1; i++) {
    let total = 0
    let row: number
    let col: number
    if (i < first.length) {
      row = i
      col = 0
    } else {
      row = first.length - 1
      col = i - row
    }
    while (row >= 0 && col < first.length) total += table[row--][col++]
    result[i] = total
  }
  return result
}

const args = process.argv.slice(2)
const first = JSON.parse(args[0])
const second = JSON.parse(args[1])
const result = convolve(first, second)
console.log(result)
