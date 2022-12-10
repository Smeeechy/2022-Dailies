/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 
12 is written as XII, which is simply X + II. The number 27 is written as XXVII, 
which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, 
the numeral for four is not IIII. Instead, the number four is written as IV. Because 
the one is before the five we subtract it making four. The same principle applies to 
the number nine, which is written as IX. There are six instances where subtraction is 
used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

export const romanToInt = (s: string): number => {
  const map: { [key: string]: number } = {
    I: 1,
    V: 5,
    IV: 4,
    X: 10,
    IX: 9,
    L: 50,
    XL: 40,
    C: 100,
    XC: 90,
    D: 500,
    CD: 400,
    M: 1000,
    CM: 900
  }

  let total = 0
  const keys = Object.keys(map)
  while (s.length > 0) {
    const pattern = keys.pop()!
    while (s.indexOf(pattern) !== -1) {
      total += map[pattern]
      s = s.replace(pattern, '')
    }
  }
  return total
}

const args = process.argv.slice(2)
const roman = args[0]
const result = romanToInt(roman)
console.log(result)
