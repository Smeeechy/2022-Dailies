/*
Solve a given equation and return the value of 'x' in the form of a string "x=#value". 
The equation contains only '+', '-' operation, the variable 'x' and its coefficient. 
You should return "No solution" if there is no solution for the equation, or "Infinite 
solutions" if there are infinite solutions for the equation.

If there is exactly one solution for the equation, we ensure that the value of 'x' is an integer.
*/

export const solveEquation = (equation: string): string => {
  const [leftSide, rightSide] = equation.split('=')
  const regex = /(-?\d*)x?/g

  let xCoef = 0
  let sum = 0

  for (const [match, group] of leftSide.matchAll(regex)) {
    if (!match) continue
    if (match.endsWith('x')) {
      if (group === '-') xCoef -= 1
      else if (group === '') xCoef += 1
      else xCoef += +group
    } else sum -= +group
  }

  for (const [match, group] of rightSide.matchAll(regex)) {
    if (!match) continue
    if (match.endsWith('x')) {
      if (group === '-') xCoef += 1
      else if (group === '') xCoef -= 1
      else xCoef -= +group
    } else sum += +group
  }

  if (xCoef === 0) {
    if (sum !== 0) return 'No solution'
    return 'Infinite solutions'
  }
  return `x=${sum / xCoef}`
}

const args = process.argv.slice(2)
const result = solveEquation(args[0])
console.log(result)
