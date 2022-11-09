/*
You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
*/

// really scraping the bottom of the barrel here huh
export const maximum69Number = (num: number): number => {
  let result = ('' + num).split('')
  const index = result.indexOf('6')
  if (index >= 0) result[index] = '9'
  return +result.join('')
}

const args = process.argv.slice(2)
const num = parseInt(args[0])
const result = maximum69Number(num)
console.log(result)
