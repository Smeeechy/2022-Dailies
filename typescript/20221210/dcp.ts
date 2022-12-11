/*
Given an integer num, return a string representing its hexadecimal representation. 
For negative integers, two’s complement method is used.

All the letters in the answer string should be lowercase characters, and there 
should not be any leading zeros in the answer except for the zero itself.

Note: You are not allowed to use any built-in library method to directly solve this problem.
*/

// feels over-engineered to all hell but I had to write it during a christmas party
export const toHex = (num: number): string => {
  if (num === 0) return '0'
  const isNegative = num < 0
  num = Math.abs(num)
  let result = ''
  for (let exp = 7; exp >= 0; exp--) {
    for (let coef = 15; coef >= 0; coef--) {
      if (coef * Math.pow(16, exp) <= num) {
        result += decToHex(coef)
        num -= coef * Math.pow(16, exp)
        break
      }
    }
  }
  if (isNegative) return hexComplement(result)
  while (result.startsWith('0')) result = result.slice(1)
  return result
}

const decToHex = (num: number): string => '0123456789abcdef'.split('')[num]

const hexToDec = (num: string): number => '0123456789abcdef'.indexOf(num)

const hexComplement = (num: string): string => {
  let result = ''
  for (let char of num) result += decToHex(15 - hexToDec(char))
  return addOne(result)
}

const addOne = (num: string): string => {
  const splitNum = num.split('')
  const lastDigit = splitNum.pop()!
  if (lastDigit === 'f') return addOne(splitNum.join('')) + '0'
  splitNum.push(decToHex(hexToDec(lastDigit) + 1))
  return splitNum.join('')
}

const args = process.argv.slice(2)
const num = parseInt(args[0])
const result = toHex(num)
console.log(result)
