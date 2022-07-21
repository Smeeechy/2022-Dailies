/*
Given an array of positive integers, find the maximum sum of non-adjacent elements.
*/

const maxSubsetSumNoAdjacent = array => {
  if (array.length === 0) return 0
  if (array.length === 1) return array[0]
  const best = [array[0], Math.max(array[0], array[1])]
  for (let i = 2; i < array.length; i++) best[i] = Math.max(best[i - 1], best[i - 2] + array[i])
  return Math.max(...best)
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = maxSubsetSumNoAdjacent(nums)
console.log(result)