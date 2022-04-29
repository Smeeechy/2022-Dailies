/*
Given a linked list and an integer k, remove the k-th node from the end of the list and return the head of the list.

k is guaranteed to be smaller than the length of the list.

Do this in one pass.
*/

class ListNode {
    constructor(val) {
        this.val = val
        this.prev = null
        this.next = null
    }
}

// nowhere did the prompt say it was a singly-linked list soooo
class LinkedList {
    constructor(val=null) {
        if (val == null) {
            this.head = null
            this.tail = null
            this.length = 0
        } else {
            this.head = new ListNode(val)
            this.tail = this.head
            this.length = 1
        }
    }

    add(val) {
        let node = new ListNode(val)
        if (this.head == null) {
            this.head = node
            this.tail = node
            this.length = 1
            return
        }
        node.prev = this.tail
        this.tail.next = node
        this.tail = node
        this.length += 1
    }
}

const args = process.argv.slice(2)
const k = parseInt(args[0])
let list = new LinkedList()
for (const el of args.slice(1).map(Number)) {
    list.add(el)
}

const result = removeKthLastElement(k, list)
console.log(result)

function removeKthLastElement(k, list) {
    let current = list.tail
    for (let i = 1; i < k; i++) {
        current = current.prev
    }
    let temp = current.prev
    current.prev.next = current.next
    current.next.prev = temp
    while (current.prev != null) current = current.prev
    return current
}