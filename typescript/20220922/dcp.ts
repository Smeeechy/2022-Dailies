/*
Given two strings, determine the longest common subsequence (lcs) between them.
Note that the lcs doesn't need to be consecutive letters, just sequential.
*/

// too tired from stg rest cert stuff to annotate this one.
// uses dynamic programming to figure it out
export const longestCommonSubsequence = (s1: string, s2: string): string[] => {
  const grid = new Array(s1.length + 1).fill('').map(el => [el, ...new Array(s2.length).fill('')])
  grid[0] = new Array(s2.length + 1).fill('')
  // s1 is the row, s2 is the column
  for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[row].length; col++) {
      if (s1[row - 1] === s2[col - 1]) grid[row][col] = grid[row - 1][col - 1] + s1[row - 1]
      else {
        if (grid[row - 1][col].length > grid[row][col - 1].length) grid[row][col] = grid[row - 1][col]
        else grid[row][col] = grid[row][col - 1]
      }
    }
  }
  return grid.pop()!.pop().split('')
}

const args = process.argv.slice(2)
const result = longestCommonSubsequence(args[0], args[1])
console.log(result)
