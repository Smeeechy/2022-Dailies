/*
Given the head of a singly-linked list of arbitrary length k, return
the result of zipping together the front and end of the list.
For example:
1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 ===> 1 -> 7 -> 2 -> 6 -> 3 -> 5 -> 4
*/

// utility class for easily creating/viewing linked lists
class LinkedList {
  constructor(value = null) {
    this.value = value
    this.next = null
  }

  add(value) {
    if (this.value === null) {
      this.value = value
      return this
    } else {
      this.next = new LinkedList(value)
      return this.next
    }
  }

  toString() {
    return this.next ? `${this.value} -> ${this.next}` : this.value
  }
}

const zipLinkedList = head => {
  let [headOne, headTwo] = splitList(head)
  headTwo = reverseList(headTwo)
  const zipped = zip(headOne, headTwo)
  return zipped
}

const splitList = head => {
  let slow = head
  let fast = head
  while (fast.next) {
    slow = slow.next
    fast = fast.next
    if (fast.next) fast = fast.next
  }
  const headTwo = slow.next
  slow.next = null
  return [head, headTwo]
}

const reverseList = head => {
  let prev
  let current = head
  while (current) {
    const oldNext = current.next
    current.next = prev
    prev = current
    current = oldNext
  }
  return prev
}

const zip = (headOne, headTwo) => {
  let currentOne = headOne
  let currentTwo = headTwo
  while (currentTwo) {
    let oldOneNext = currentOne.next
    let oldTwoNext = currentTwo.next
    currentOne.next = currentTwo
    currentTwo.next = oldOneNext
    currentOne = oldOneNext
    currentTwo = oldTwoNext
  }
  return headOne
}

const args = process.argv.slice(2)
const list = new LinkedList()
let current = list
args.map(Number).forEach(num => current = current.add(num))
console.log('given:  ' + list.toString())
zipLinkedList(list)
console.log('result: ' + list.toString())