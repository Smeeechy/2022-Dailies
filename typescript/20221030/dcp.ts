/*
Given two integers, dividend and divisor, divide the two integers without using
multiplication, division, or modulus.
Return their quotient truncated to an integer.
*/

const divide = (dividend: number, divisor: number): number => {
  let quotient = 0
  let _dividend = Math.abs(dividend)
  let _divisor = Math.abs(divisor)

  if (_divisor === 1) quotient = _dividend
  else {
    while (_dividend >= _divisor) {
      _dividend -= _divisor
      quotient++
    }
  }

  // throttle and apply correct sign to quotient
  return !(dividend > 0 !== divisor > 0)
    ? Math.min(quotient, Math.pow(2, 31) - 1)
    : Math.max(-quotient, Math.pow(-2, 31))
}

const args = process.argv.slice(2)
const dividend = parseInt(args[0])
const divisor = parseInt(args[1])
const result = divide(dividend, divisor)
console.log(result)
