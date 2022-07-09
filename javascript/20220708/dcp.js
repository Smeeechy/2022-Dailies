/*
Invert a binary tree.
*/

const invertBinaryTree = tree => {
  if (!tree) return
  swapChildren(tree)
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
}

const swapChildren = node => {
    let temp = node.left
    node.left = node.right
    node.right = temp
}

const args = process.argv.slice(2)
const root = JSON.parse(args[0])
const result = invertBinaryTree(root)
console.log(result)