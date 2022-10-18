/*
Given an integer, convert it to a roman numeral.
*/

const map: { [key: number]: string } = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
}

function intToRoman(num: number): string {
  const keys = Object.keys(map).map(Number).reverse()
  let result = ''
  while (num > 0) {
    for (const key of keys) {
      if (num >= key) {
        num -= key
        result += map[key]
        break
      }
    }
  }
  return result
}

const args = process.argv.slice(2)
const result = intToRoman(parseInt(args[0]))
console.log(result)
