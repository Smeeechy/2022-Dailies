/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
ans[i] is the number of 1's in the binary representation of i.
*/

export const countBits = (n: number): number[] => {
  const result = [0]
  for (let i = 1; i <= n; i++) {
    // knowing that halving a number is the same as bit shifting it right by one,
    // if the number is even, halving it will result in the same number of ones
    // because the least significant bit (LSB) is guaranteed to be a 0:
    // dec    10    / 2 = 5
    // bin    1010 >> 1 = 101
    // ones   2           2
    if (i % 2 === 0) result[i] = result[i / 2]
    // conversely, if the number is odd, halving it will result in the same number
    // of ones - 1 because the LSB is guaranteed to be a 1:
    // dec    13    / 2 = 6   (this is integer division, or flooring the result)
    // bin    1101 >> 1 = 110
    // ones   3           2
    else result[i] = result[~~(i / 2)] + 1
  }
  return result
}

const args = process.argv.slice(2)
const n = parseInt(args[0])
const result = countBits(n)
console.log(result)
