/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.
- Return true if n is a happy number, and false if not.
*/

export const isHappy = (n: number): boolean => {
  const nums = [n]
  while (n !== 1) {
    n = ('' + n)
      .split('')
      .map(Number)
      .map(n => n * n)
      .reduce((acc, next) => (acc += next), 0)
    if (nums.includes(n)) return false
    else nums.push(n)
  }
  return true
}

const args = process.argv.slice(2)
const n = parseInt(args[0])
const result = isHappy(n)
console.log(result)
