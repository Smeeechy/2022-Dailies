/*
Given the root of a binary tree, flatten it and return the leftmost node.
*/

interface BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null
}

export const flattenBinaryTree = (root: BinaryTree): BinaryTree => {
  const list: BinaryTree[] = []
  inOrderTraverse(root, list)
  for (let i = 0; i < list.length; i++) {
    if (i - 1 >= 0) list[i].left = list[i - 1]
    if (i + 1 < list.length) list[i].right = list[i + 1]
  }
  return list[0]
}

const inOrderTraverse = (node: BinaryTree, list: BinaryTree[]): void => {
  if (node.left) inOrderTraverse(node.left, list)
  list.push(node)
  if (node.right) inOrderTraverse(node.right, list)
}

const args = process.argv.slice(2)
const root = JSON.parse(args[0])
const result = flattenBinaryTree(root)
console.log(result)
