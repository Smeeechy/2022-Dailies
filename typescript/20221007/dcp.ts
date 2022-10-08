/*
Given two binary trees, determine if their leaf traversals are identical.
A leaf traversal is an in-order traversal of only a tree's leaves.
*/

type BinaryTree = {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null
}

export const compareLeafTraversal = (tree1: BinaryTree, tree2: BinaryTree): boolean => {
  const leaves1: number[] = []
  const leaves2: number[] = []
  inOrderLeafTraversal(tree1, leaves1)
  inOrderLeafTraversal(tree2, leaves2)
  if (leaves1.length !== leaves2.length) return false
  for (let i = 0; i < leaves1.length; i++) if (leaves1[i] !== leaves2[i]) return false
  return true
}

const inOrderLeafTraversal = (tree: BinaryTree, leaves: number[]): void => {
  if (tree.left) inOrderLeafTraversal(tree.left, leaves)
  if (!tree.left && !tree.right) leaves.push(tree.value)
  if (tree.right) inOrderLeafTraversal(tree.right, leaves)
}

const args = process.argv.slice(2)
const tree1 = JSON.parse(args[0])
const tree2 = JSON.parse(args[1])
const result = compareLeafTraversal(tree1, tree2)
console.log(result)
