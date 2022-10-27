/*

*/

const removeDuplicates = (nums: number[]): number => {
  let current = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === current) {
      nums[i] = -Infinity
    } else {
    }
  }
  return -1
}

const args = process.argv.slice(2)
