/*
Given an array of integers representing the pre-order traversal of a binary search tree, reconstruct the tree and return its head.
*/

// pot = 'pre-order traversal' but that's way too long and cumbersome
const reconstructBst = pot => {
  if (pot.length === 0) return null
  const root = { value: pot.shift() }
  let rightChildId = pot.length
  for (let i = 0; i < pot.length; i++) {
    if (pot[i] >= root.value) {
      rightChildId = i
      break
    }
  }
  root.right = reconstructBst(pot.splice(rightChildId))
  root.left = reconstructBst(pot)
  return root
}

const args = process.argv.slice(2)
const inOrderTraversal = args.map(Number)
const result = reconstructBst(inOrderTraversal)
console.log(result)
