/*
Given a string representation of pi and a list of strings of numbers, 
determine the fewest numbers in the list that must be combined to exactly recreate the pi string.
If a valid combination does not exist, return -1.
*/

const numbersInPi = (pi, numbers) => {
  const memo = {}
  for (let num of numbers) memo[num] = 0
  const result = fewestSpaces(pi, numbers, memo)
  return result === Infinity ? -1 : result
}

const fewestSpaces = (str, options, memo) => {
  if (str in memo) return memo[str]
  let best = Infinity
  for (const option of options) {
    if (option === str) {
      best = 0
      break
    }
    if (str.startsWith(option)) {
      let subStr = str.slice(option.length)
      let current = 1 + fewestSpaces(subStr, options, memo)
      if (current < best) best = current
    }
  }
  memo[str] = best
  return best
}

const args = process.argv.slice(2)
const piString = args[0]
const numbers = JSON.parse(args[1])
const result = numbersInPi(piString, numbers)
console.log(result)