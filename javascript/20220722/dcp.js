/*
Given a set of integers, return its powerset.

[] ==> [[]]
[1] ==> [[], [1]]
[1, 2] ==> [[], [1], [2], [1, 2]]
...
*/

const powerset = array => {
  let result = [[]]
  for (let el of array) {
    for (let subset of result) {
      result = [...result, [...subset, el]]
    }
  }
  return result
}

const args = process.argv.slice(2)
const set = args.map(Number)
const result = powerset(set)
console.log(result)