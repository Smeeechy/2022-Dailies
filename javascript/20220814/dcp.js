/*
Given a binary tree, determine whether or not it is height balanced.
A node is height balanced if the difference between the heights of its left and right subtrees is 1 or less 
and both of its children are also height balanced.
*/

const heightBalancedBinaryTree = tree => {
  return heightBalanced(tree)[0]
}

const heightBalanced = tree => {
  if (!tree) return [true, 0]
  const [leftBalanced, leftHeight] = heightBalanced(tree.left)
  const [rightBalanced, rightHeight] = heightBalanced(tree.right)
  const subtreesBalanced = leftBalanced && rightBalanced
  const selfBalanced = Math.abs(leftHeight - rightHeight) < 2
  return [
    subtreesBalanced && selfBalanced,
    Math.max(leftHeight, rightHeight) + 1
  ]
}

const args = process.argv.slice(2)
