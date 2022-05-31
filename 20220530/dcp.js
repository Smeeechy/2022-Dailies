/*
Given a binary tree and a target node, return the target node's successor, or null if there isn't one
*/

const findSuccessor = (tree, target) => {
    let inOrder = inOrderTraversal(tree)
    for (let i = 0; i < inOrder.length; i++) {
        if (inOrder[i].value === target.value) return inOrder[i + 1] ?? null
    }
    return null
}

const inOrderTraversal = tree => {
    let left, right
    if (tree.left === null) left = []
    else left = inOrderTraversal(tree.left)
    if (tree.right === null) right = []
    else right = inOrderTraversal(tree.right)
    return [...left, tree, ...right]
}

const args = process.argv.slice(2)
const tree = JSON.parse(args[0])
const target = JSON.parse(args[1])
const result = findSuccessor(tree, target)
console.log(result)