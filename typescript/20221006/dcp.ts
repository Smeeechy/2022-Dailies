/*
Given a binary tree, determine the maximum sum that can be found in any of its paths.
A path is defined here as any non-repeating, non-circular chain of nodes where no node has more than two connections.
*/

type BinaryTree = {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null
}

export const maxPathSum = (tree: BinaryTree | null, isRoot = true): number[] | number => {
  if (!tree) return [-Infinity, -Infinity]
  const [lBranchSum, lTreeSum] = maxPathSum(tree.left, false) as number[]
  const [rBranchSum, rTreeSum] = maxPathSum(tree.right, false) as number[]
  const maxBranchSum = Math.max(tree.value, tree.value + lBranchSum, tree.value + rBranchSum)
  const maxTreeSum = Math.max(tree.value, maxBranchSum, lTreeSum, lBranchSum + tree.value + rBranchSum, rTreeSum)
  return isRoot ? Math.max(maxBranchSum, maxTreeSum) : [maxBranchSum, maxTreeSum]
}

const args = process.argv.slice(2)
const tree = JSON.parse(args[0])
const result = maxPathSum(tree)
console.log(result)
