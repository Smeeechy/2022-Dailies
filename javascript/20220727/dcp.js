/*
Given a binary search tree, find its kth largest value.
*/

const kthLargestValue = (tree, k) => {
  const result = []
  rtlTraversal(tree, result)
  return result[k - 1]
}

const rtlTraversal = (tree, result) => {
  if (tree.right) rtlTraversal(tree.right, result)
  result.push(tree.value)
  if (tree.left) rtlTraversal(tree.left, result)
}

const args = process.argv.slice(2)
const tree = JSON.parse(args[0])
const k = parseInt(args[1])
const result = kthLargestValue(tree, k)
console.log(result)