/*
Given an array of integers representing a single number, return a new array
representing the given number + 1.
*/

const plusOne = (digits: number[]): number[] => {
  let digit = digits.length - 1
  while (true) {
    if (digits[digit] === 9) {
      digits[digit] = 0
      if (digit === 0) {
        digits.unshift(1)
        return digits
      } else digit--
    } else {
      digits[digit]++
      return digits
    }
  }
}

const args = process.argv.slice(2)
const number = args.map(Number)
const result = plusOne(number)
console.log(result)
