/*
Write a function to validate whether or not a binary tree is a binary search tree.
*/

const validateBST = node => {
    if (node == null) return true
    const { value } = node
    if (allLT(node.left, value) && allGT(node.right, value)) {
        return validateBST(node.left) && validateBST(node.right)
    } else return false
}

const allLT = (node, value) => {
    if (node == null) return true
    if (node.value >= value) return false
    else return allLT(node.left, value) && allLT(node.right, value)
}

const allGT = (node, value) => {
    if (node == null) return true
    if (node.value < value) return false
    else return allGT(node.left, value) && allGT(node.right, value)
}

const args = process.argv.slice(2)
const tree = JSON.parse(args[0])
console.log(tree)
console.log(validateBST(tree))