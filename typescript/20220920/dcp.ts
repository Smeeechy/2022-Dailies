/*
Given an array of positive integers, where the element at each index is the maximum jump that can be made from that index,
determine the minimum number of jumps required to reach the final index.
*/

export const minNumberOfJumps = (array: number[], jumps: number = 0): number => {
  if (array.length <= 1) return jumps
  let maxJumps = array[0]
  if (maxJumps >= array.length) return jumps + 1
  let best = Infinity
  // for each jump size up to the max, slice off that much of the array and recurse
  for (let jumpLength = 1; jumpLength <= maxJumps; jumpLength++) {
    const bestFromThisJumpLength = minNumberOfJumps(array.slice(jumpLength), jumps + 1)
    if (bestFromThisJumpLength < best) best = bestFromThisJumpLength
  }
  return best
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = minNumberOfJumps(nums)
console.log(result)