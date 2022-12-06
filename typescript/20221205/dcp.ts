/*
Given an integer num, repeatedly add all its digits until the result 
has only one digit, and return it.
*/

export const addDigits = (n: number): number => {
  let num = n
  while (num.toString().length > 1)
    num = num
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, next) => (acc += next), 0)
  return num
}

const args = process.argv.slice(2)
const num = parseInt(args[0])
const result = addDigits(num)
console.log(result)
