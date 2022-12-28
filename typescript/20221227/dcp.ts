/*
Given a positive integer n, find and return the longest distance 
between any two adjacent 1's in the binary representation of n. 
If there are no two adjacent 1's, return 0.

Two 1's are adjacent if there are only 0's separating them 
(possibly no 0's). The distance between two 1's is the absolute 
difference between their bit positions. For example, the two 1's 
in "1001" have a distance of 3.
*/

export const binaryGap = (n: number): number => {
  let biggestGap = 0
  let currentGap = 0
  const binaryNum = n.toString(2).split('').map(Number)
  let currentBit = binaryNum.pop()
  while (currentBit !== 1 && binaryNum.length > 0) currentBit = binaryNum.pop()
  while (binaryNum.length > 0) {
    currentBit = binaryNum.pop()
    if (++currentGap > biggestGap) biggestGap = currentGap
    if (currentBit === 1) currentGap = 0
  }
  return biggestGap
}

const args = process.argv.slice(2)
const num = parseInt(args[0])
const result = binaryGap(num)
console.log(result)
