/*
Given an array of integers, find the maximum sum that can be found from a strictly-increasing
subsequence in the array, as well as an ordered list of the elements that make up the sum.
The subsequence elements do not need to be adjacent in the original array.
*/

export const maxSumIncreasingSubsequence = (array: number[]): [number, number[]] => {
  // sums contains the maximum sum of any subsequence ending in the element at that index
  const sums = [...array]
  // sequence contains the indices of the most recently added sum from sums
  const sequence = new Array(array.length).fill(-1)
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] < array[i] && array[i] + sums[j] > sums[i]) {
        // the number at j is less than the number at i AND
        // the number at i + sums[j] is greater than the current best sum at i
        sums[i] = array[i] + sums[j]
        sequence[i] = j
      }
    }
  }

  // at this point we've found our max sum, we just need to work backwards using our
  // sequence array to build out the elements that go into the max sum
  const max = Math.max(...sums)
  const maxSequence: number[] = []
  let sequenceIndex = sums.indexOf(max)
  while (sequenceIndex !== -1) {
    maxSequence.unshift(array[sequenceIndex])
    sequenceIndex = sequence[sequenceIndex]
  }
  return [max, maxSequence]
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const result = maxSumIncreasingSubsequence(nums)
console.log(result)
