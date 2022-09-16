/*
Given two sorted singly-linked lists, merge them into a single sorted singly-
linked list in-place and return the new head.
*/

// utility class for testing 'n such - from my 9/11 daily
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

const mergeLinkedLists = (headOne, headTwo) => {
  // choose list with smaller head to mutate, and other list to track values to insert
  let prev = headOne.value < headTwo.value ? headOne : headTwo
  let current = headOne.value < headTwo.value ? headTwo : headOne
  let next = prev.next

  while (current) {
    // prev <= current <= next
    if ((prev.value <= current.value) && (next === null || current.value <= next.value)) {
      // insert current between prev and next, then increment next to current and
      // current to its old next value
      const tempNext = current.next
      prev.next = current
      current.next = next
      prev = current
      current = tempNext
    } else {
      // otherwise just increment prev and next
      prev = next
      next = next.next
    }
  }
  // return head of whichever list was chosen to be mutated at beginning of method
  return headOne.value < headTwo.value ? headOne : headTwo
}

const args = process.argv.slice(2)
const headOne = JSON.parse(args[0])
const headTwo = JSON.parse(args[1])
const result = mergeLinkedLists(headOne, headTwo)
console.log(result.toString())
