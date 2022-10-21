/*
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is 
then converted into a different digit string.

To determine how you "say" a digit string, split it into the minimal number of substrings 
such that each substring contains exactly one unique digit. Then for each substring, say 
the number of digits, then say the digit. Finally, concatenate every said digit.

Given a positive integer n, return the nth term of the count-and-say sequence.
*/

const countAndSay = (n: number): string => {
  let result = '1'
  for (let i = 1; i < n; i++) result = runLengthEncode(result)
  return result
}

const runLengthEncode = (n: string): string => {
  const nSplit = n.split('').map(Number)
  const result: number[] = []
  let currentNum = nSplit[0]
  let currentLength = 1
  let i = 1
  while (i < nSplit.length) {
    if (nSplit[i] === currentNum) {
      currentLength++
      i++
      continue
    }
    result.push(currentLength, currentNum)
    currentLength = 0
    currentNum = nSplit[i]
  }
  result.push(currentLength, currentNum)
  return result.join('')
}

const args = process.argv.slice(2)
const n = parseInt(args[0])
const result = countAndSay(n)
console.log(result)
