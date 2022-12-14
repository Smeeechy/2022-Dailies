/*
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

export const isPalindrome = (n: number): boolean => {
  return n.toString().split('').reverse().join('') === n.toString()
}

const args = process.argv.slice(2)
const num = parseInt(args[0])
const result = isPalindrome(num)
console.log(result)
