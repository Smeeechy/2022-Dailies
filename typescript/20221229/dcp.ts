/*
Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
*/

class MyHashSet {
  values: number[]

  constructor() {
    this.values = []
  }

  add(key: number): void {
    if (!this.values.includes(key)) this.values.push(key)
  }

  remove(key: number): void {
    const index = this.values.indexOf(key)
    if (index !== -1) this.values.splice(index, 1)
  }

  contains(key: number): boolean {
    return this.values.includes(key)
  }
}
