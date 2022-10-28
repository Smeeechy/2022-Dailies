/*
Implement pow(x, n), which calculates x raised to the power of n.
*/

// opted for recursion instead of the lame (and slow) method of repeated multiplication.
const myPow = (base: number, exp: number): number => {
  if (exp === -1) return 1 / base
  if (exp === 0) return 1
  if (exp === 1) return base
  // drastically cuts down computation time. also '~~' is just a quick way to truncate floats
  const halfPow = myPow(base, ~~(exp / 2))
  return myPow(base, exp % 2) * halfPow * halfPow
}

const args = process.argv.slice(2)
const base = parseFloat(args[0])
const exp = parseInt(args[1])
const result = myPow(base, exp)
console.log(result)
