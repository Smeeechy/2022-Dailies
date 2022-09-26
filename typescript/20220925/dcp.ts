/*
Write a function that takes a binary tree and returns the sum of all of its subtrees' nodes' depths.
*/

interface BinaryTree {
  value: number
  left?: BinaryTree
  right?: BinaryTree
}

const allKindsOfNodeDepths = (root: BinaryTree): number => {
  const allDepths: number[] = []
  nodeDepthsRecursive(root, allDepths)
  return allDepths.reduce((prev, current) => prev + current, 0)
}

const nodeDepthsRecursive = (root: BinaryTree | undefined, allDepths: number[]): number[] => {
  let depths: number[] = []
  if (!root) return depths
  depths.push(...nodeDepthsRecursive(root.left, allDepths).map(depth => ++depth))
  depths.push(...nodeDepthsRecursive(root.right, allDepths).map(depth => ++depth))
  allDepths.push(depths.reduce((prev, current) => prev + current, 0))
  return depths.concat(0)
}

const args = process.argv.slice(2)
const root = JSON.parse(args[0])
const result = allKindsOfNodeDepths(root)
console.log(result)
