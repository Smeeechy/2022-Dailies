/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

type TreeNode = {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

export const isSymmetric = (root: TreeNode | null): boolean => {
  if (root === null) return true
  if (root.left && root.right && root.left.val !== root.right.val) return false
  const inOrderLeft: number[] = []
  const inOrderRight: number[] = []
  inOrderTraversal(root.left, inOrderLeft)
  inOrderTraversal(root.right, inOrderRight)
  if (inOrderLeft.length !== inOrderRight.length) return false
  for (let i = 0; i < inOrderLeft.length; i++) {
    if (inOrderLeft[i] !== inOrderRight[inOrderRight.length - i - 1]) return false
  }
  return true
}

const inOrderTraversal = (root: TreeNode | null, result: number[]): void => {
  if (root === null) return
  if (!root.left && !root.right) {
    result.push(root.val)
    return
  }
  if (root.left) inOrderTraversal(root.left, result)
  else result.push(-Infinity)
  result.push(root.val)
  if (root.right) inOrderTraversal(root.right, result)
  else result.push(-Infinity)
}
