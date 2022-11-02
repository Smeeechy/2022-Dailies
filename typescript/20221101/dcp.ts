/*
Given a string of integers representing an encoded string, return the number
of ways you can decode the input string.
The input string is always encoded with an A1Z26 cipher.
*/

const abc = '_abcdefghijklmnopqrstuvwxyz'

const numDecodings = (s: string): number => {
  const chars = s.split('')
  if (chars[0] === '0') return 0
  let ways: number[] = new Array(s.length + 1).fill(0)
  ways[s.length] = 1
  for (let i = s.length - 1; i >= 0; i--) {
    if (chars[i] !== '0') {
      ways[i] = ways[i + 1]
      if (i < s.length - 1 && parseInt(chars[i] + chars[i + 1]) <= 26) ways[i] += ways[i + 2]
    }
  }
  return ways[0]
}

const args = process.argv.slice(2)
const result = numDecodings(args[0])
console.log(result)
