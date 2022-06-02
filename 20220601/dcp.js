/*
Given a singly linked list, swap every pair of adjacent nodes in place and return the new head
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const nodeSwap = head => {
    let first = head
    let second = head.next
    let newHead = second ? second : first
    while (true) {
        if (!first || !second) break
        swap(head, first, second)
        first = first.next
        second = first?.next ?? null
    }
    return newHead
}

const swap = (head, first, second) => {
    if (!first || !second) return
    let prev = null
    let current = head
    while (current != first) {
        prev = current
        current = current.next
    }
    let temp = second.next
    if (prev) prev.next = second
    second.next = first
    first.next = temp
}

const args = process.argv.slice(2)
const nums = args.map(Number)
const head = new Node(nums[0])
let current = head
nums.slice(1).forEach(num => {
    current.next = new Node(num)
    current = current.next
})

const newHead = nodeSwap(head)

let current2 = newHead
while (current2 != null) {
    console.log(current2.value)
    current2 = current2.next
}