/*
Given the head of a singly linked list, reverse it in-place and return the new head.
*/

const reverseLinkedList = head => {
  let prev = null
  let current = head
  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}

const args = process.argv.slice(2)
const head = JSON.parse(args[0])
const result = reverseLinkedList(head)
console.log(result)