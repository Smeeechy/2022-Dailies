/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/

// hey what can i say i'm a real michaelangelo in this home stretch
// really pushing myself with hard problems everyday huh
export const fizzBuzz = (n: number): string[] => {
  return new Array(n).fill('').map((_, index) => {
    const num = index + 1
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0) return 'Fizz'
    if (num % 5 === 0) return 'Buzz'
    return num.toString()
  })
}

const args = process.argv.slice(2)
const n = parseInt(args[0])
const result = fizzBuzz(n)
console.log(result)
