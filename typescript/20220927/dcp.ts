/*
Given a string, find the fewest necessary cuts required to make every partition a palindrome.
ex: noonabbad ===> noon|abba|d (2 cuts)
*/

export const palindromePartitioningMinCuts = (string: string): number => {
  // create an n * m table where each cell is whether or not a substring of string from n to m is a palindrome
  // essentially half of the table gets ignored so yeah it's not super efficient ok
  const table: boolean[][] = new Array(string.length).fill(false).map(_ => new Array(string.length).fill(false))
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      if (isPalindrome(string.substring(i, j + 1))) table[i][j] = true
    }
  }

  // count partitions while making a string representation of where the partitions occur.
  // works by looking at each column in the table in reverse order, starting at the 'bottom' (meaning main diagonal of the table)
  // of each column, finding the longest palindrome (by looking for the lowest-index 'true' in that column),
  // then skipping to that row next iteration after inserting a bar into the partitioned string
  const partitioned = string.split('')
  let splitCount = 0
  for (let col = string.length - 1; col >= 0; col--) {
    let best = col
    for (let row = col; row >= 0; row--) {
      if (table[row][col]) best = row
    }
    if (best !== 0) {
      partitioned.splice(best, 0, '|')
      splitCount++
    }
    col = best
  }
  console.log(partitioned.join(''))
  return splitCount
}

const isPalindrome = (string: string): boolean => {
  return string === string.split('').reverse().join('')
}

const args = process.argv.slice(2)
const result = palindromePartitioningMinCuts(args[0])
console.log(result)
