/*
Given the head of a binary tree, convert it in-place into a right sibling tree and return the head.
*/

const rightSiblingTree = (node, newRight = null) => {
  const oldRight = node.right
  node.right = newRight
  if (node.left) rightSiblingTree(node.left, oldRight)
  if (oldRight) rightSiblingTree(oldRight, node.right?.left)
  return node
}

const args = process.argv.slice(2)
