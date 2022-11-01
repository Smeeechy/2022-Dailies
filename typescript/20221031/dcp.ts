/*
Given a positive integer n, return its square root truncated to the
nearest integer without using an exponentiation function.
*/

// just uses a binary search to find the closest integer root
const mySqrt = (x: number): number => {
  if (x === 1) return 1
  let low = 0
  let mid = 0
  let high = x
  while (low < high) {
    mid = ~~((low + high) / 2)
    if (mid * mid < x) low = Math.max(mid, low + 1)
    else if (mid * mid > x) high = Math.min(mid, high - 1)
    else break
  }
  return mid
}

const args = process.argv.slice(2)
const num = parseInt(args[0])
const result = mySqrt(num)
console.log(result)
