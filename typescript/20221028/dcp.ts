/*
Given a set of integers, return its powerset.
A powerset is the set of all subsets of the original set.
*/

// i did this in javascript previously but i've since improved
export const powerset = (nums: number[]): number[][] => {
  const result: number[][] = [[]]
  for (const num of nums) {
    for (const subset of [...result]) {
      result.push([...subset, num])
    }
  }
  return result
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = powerset(nums)
console.log(result)
