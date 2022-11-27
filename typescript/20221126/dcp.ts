/*
Given two binary strings a and b, return their sum as a binary string.

Constraints:

- 1 <= a.length, b.length <= 10^4
- a and b consist only of '0' or '1' characters.
- Each string does not contain leading zeros except for the zero itself.
*/

export const addBinary = (a: string, b: string): string => (BigInt('0b' + a) + BigInt('0b' + b)).toString(2)

const args = process.argv.slice(2)
const result = addBinary(args[0], args[1])
console.log(result)
