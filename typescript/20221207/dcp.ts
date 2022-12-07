/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2^x.
*/

export const isPowerOfTwo = (n: number): boolean => {
  while (n > 1) n /= 2
  return n === 1
}

const args = process.argv.slice(2)
const num = parseInt(args[0])
const result = isPowerOfTwo(num)
console.log(num, result)
