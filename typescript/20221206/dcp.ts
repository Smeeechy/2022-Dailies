/*
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
That is, each element of nums is covered by exactly one of the ranges, and there is no 
integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
*/

export const summaryRanges = (nums: number[]): string[] => {
  const result: string[] = []
  if (nums.length === 0) return result
  let rangeStart = nums[0]
  let rangeEnd = rangeStart
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== rangeEnd + 1) {
      if (rangeStart === rangeEnd) result.push(`${rangeStart}`)
      else result.push(`${rangeStart}->${rangeEnd}`)
      rangeStart = nums[i]
    }
    rangeEnd = nums[i]
  }
  if (rangeStart === rangeEnd) result.push(`${rangeStart}`)
  else result.push(`${rangeStart}->${rangeEnd}`)
  return result
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = summaryRanges(nums)
console.log(result)
