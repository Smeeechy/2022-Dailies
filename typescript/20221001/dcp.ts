/*
Implement a Least Recently Used (LRU) Cache. It should be limited to a given max size 
and contain the following methods:

- insertKeyValuePair(key, value): insert a new key-value pair into the cache. if one already
    exists, update it. if full, first remove the least recently used key-value pair.
- getValueFromKey(key): return the value of the given key if it exists, otherwise null.
- getMostRecentKey(): return the key of the most recently inserted OR accessed key-value pair.

All methods should run in O(1) time.
*/

// modified node class with key property, otherwise very standard
class Node {
  prev: Node | null
  key: string
  value: number
  next: Node | null

  constructor(key: string, value: number) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

// a head node and tail node connected by any number of nodes in between
class DoublyLinkedList {
  head: Node | null
  tail: Node | null

  constructor() {
    this.head = null
    this.tail = null
  }

  // inserts new node at head of list
  add(node: Node) {
    if (this.head === null || this.tail === null) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
  }

  // blindly stitches given node's prev and next together
  // technically doesn't care if it's even in the list
  remove(node: Node) {
    if (node === this.head) this.head = this.head.next
    if (node === this.tail) this.tail = this.tail.prev
    if (node?.prev) node.prev.next = node.next
    if (node?.next) node.next.prev = node.prev
  }
}

// uses a hashmap that points to nodes in a doubly linked list.
// the hashmap enables retrieval of values in constant time, whereas the list keeps track of
// insertion order and manages insertion and removal of values in constant time.
export class LRUCache {
  cache: { [key: string]: Node | null } = {}
  queue: DoublyLinkedList = new DoublyLinkedList()
  currentSize: number = 0
  maxSize: number

  constructor(maxSize: number) {
    this.maxSize = maxSize || 1
  }

  insertKeyValuePair(key: string, value: number) {
    const node = new Node(key, value)
    if (this.cache[key]) {
      this.queue.remove(this.cache[key]!)
    } else {
      if (this.currentSize === this.maxSize) {
        this.cache[this.queue.tail!.key] = null
        this.queue.remove(this.queue.tail!)
      } else this.currentSize++
    }
    this.queue.add(node)
    this.cache[key] = node
  }

  getValueFromKey(key: string) {
    const node = this.cache[key]
    if (node) {
      this.queue.remove(node)
      this.queue.add(node)
    }
    return node?.value
  }

  getMostRecentKey() {
    return this.queue.head?.key
  }
}

// not adding command-line stuff because doesn't really make sense for this problem