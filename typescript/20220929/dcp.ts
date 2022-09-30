/*
Given a linked list and an integer k, rearrange the linked list in place around
nodes with the value k and return the new head.
Rearranging the list means placing all nodes with values less than k before nodes
with value k, and placing all nodes with values greater than k after them.
All nodes should maintain their original relative ordering.
*/

// utility class for testing 'n such - from my 9/11 daily
class LinkedList {
  value: number
  next: LinkedList | null

  constructor(value: number) {
    this.value = value
    this.next = null
  }

  add(value: number) {
    this.next = new LinkedList(value)
    return this.next
  }

  toString() {
    return this.next ? `${this.value} -> ${this.next}` : this.value
  }
}

// create a list each for nodes with values less than, equal to, and greater than k
// then link up nodes in that order for new list and return the new head
export const rearrangeLinkedList = (head: LinkedList, k: number): LinkedList => {
  const nodesBefore: LinkedList[] = []
  const nodesEqual: LinkedList[] = []
  const nodesAfter: LinkedList[] = []
  let current: LinkedList | null = head
  while (current) {
    if (current.value < k) nodesBefore.push(current)
    else if (current.value > k) nodesAfter.push(current)
    else nodesEqual.push(current)
    current = current.next
  }
  const rearranged = [...nodesBefore, ...nodesEqual, ...nodesAfter]
  for (let i = 0; i < rearranged.length - 1; i++) rearranged[i].next = rearranged[i + 1]
  rearranged[rearranged.length - 1].next = null
  return rearranged[0]
}

const args = process.argv.slice(2)
const head = JSON.parse(args[0])
const k = parseInt(args[1])
console.log(head.toString())
const result = rearrangeLinkedList(head, k)
console.log(result.toString())
