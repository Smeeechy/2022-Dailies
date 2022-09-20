/*
Given a string made up of only parentheses, find the length of the longest
balanced substring within it.
A substring is considered balanced if all of its opened parentheses have
corresponding closing parentheses, and there are no leftovers of either.
ex. '(()())' is balanced but ')(())(' is not
*/

const longestBalancedSubstring = (string: string): number => {
  let best = 0
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j += 2) {
      const substring = string.substring(i, j + 1)
      if (isBalanced(substring) && substring.length > best) best = substring.length 
    }
  }
  return best
}

const isBalanced = (string: string): boolean => {
  const stack: string[] = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') stack.push('(')
    else {
      if (stack.length === 0) return false
      else stack.pop()
    }
  }
  return stack.length === 0
}

const args = process.argv.slice(2)
const string = args[0]
const result = longestBalancedSubstring(string)
console.log(result)