/*
Given a sorted array of distinct integers, construct and return the root of a binary search tree with the minimum possible height.
*/

const minHeightBst = array => {
  if (array.length === 0) return null
  const midIndex = parseInt(array.length / 2)
  const node = { value: array[midIndex] }
  node.left = minHeightBst(array.slice(0, midIndex))
  node.right = minHeightBst(array.slice(midIndex + 1))
  return node
}

const args = process.argv.slice(2)
const array = args.map(Number)
const tree = minHeightBst(array)
console.log(tree)