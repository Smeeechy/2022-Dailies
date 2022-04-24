/*
Determine whether a doubly linked list is a palindrome. What if it’s singly linked?

For example, 1 -> 4 -> 3 -> 4 -> 1 returns True while 1 -> 4 returns False.
*/

const args = process.argv.slice(2)

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SLList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    add(next) {
        if (!this.head) {
            this.head = next
            this.tail = next
        } else {
            this.tail.next = next
            this.tail = next
        }
        this.length++
    }
}

const list = new SLList()
for (const arg of args) {
    list.add(new Node(parseInt(arg)))
}

let arr = []
let current = list.head
while (current) {
    arr.push(current.val)
    current = current.next
}

let rev = [...arr].reverse()
if (arr.join('') == rev.join('')) console.log('palindrome')
else console.log('not palindrome')