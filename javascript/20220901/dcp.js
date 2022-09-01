/*
Given an ordered list of integers, determine the longest possible subsequence
that is made of (not necessarily consecutive) sequential increasing elements.
*/

const longestIncreasingSubsequence = nums => {
  // tracks the max length subsequence that can be made by ending in the element at each index
  const lengths = new Array(nums.length).fill(1)
  // tracks the index of the number that the next longest subsequence ends in
  const sequence = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // iteratively finds the longest subsequence ending at index i by comparing each previous
      // smaller value's longest possible subsequence and adding one to it
      if (nums[j] < nums[i] && lengths[j] + 1 > lengths[i]) {
        lengths[i] = lengths[j] + 1
        sequence[i] = j
      }
    }
  }
  // compile result subsequence by starting at the index of the number with the maximum length
  // and, using the sequence array we built above, continue adding numbers until we reach
  // an undefined index in the sequence array
  const result = []
  let nextId = lengths.indexOf(Math.max(...lengths))
  while (!isNaN(nextId)) {
    result.unshift(nums[nextId])
    nextId = sequence[nextId]
  }
  return result
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = longestIncreasingSubsequence(nums)
console.log(result)
