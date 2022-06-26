/*
Implement a breadth-first search algorithm.
*/

// for reference when passing in command-line json, this is the node structure that is expected
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
}

const breadthFirstSearch = (root, array) => {
    const queue = [root]
    while (queue.length > 0) {
        let current = queue.shift()
        array.push(current.name)
        current.children.forEach(child => queue.push(child))
    }
    return array
}

const args = process.argv.slice(2)
const root = JSON.parse(args[0])
const result = breadthFirstSearch(root, [])
console.log(result)