/*
Write a suffix trie class with a root node, a method for generating
a trie from a string, and a method for searching for suffixes in the trie.
Every leaf in the trie should contain a special 'endSymbol' character: '*'.
*/

interface TrieNode {
  [key: string]: TrieNode | boolean
}

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
export class SuffixTrie {
  root: TrieNode
  endSymbol: string

  constructor(string: string) {
    this.root = {}
    this.endSymbol = '*'
    this.populateSuffixTrieFrom(string)
  }

  populateSuffixTrieFrom(string: string) {
    let currentNode = this.root
    for (let i = 0; i < string.length; i++) {
      const char = string[i]
      if (!currentNode[char]) currentNode[char] = {}
      if (i !== 0) this.populateSuffixTrieFrom(string.slice(i))
      currentNode = currentNode[char] as TrieNode
    }
    currentNode[this.endSymbol] = true
  }

  contains(string: string) {
    let currentNode = this.root
    for (let char of string) {
      if (char in currentNode) currentNode = currentNode[char] as TrieNode
      else return false
    }
    return this.endSymbol in currentNode
  }
}

const args = process.argv.slice(2)
const trie = new SuffixTrie(args[0])
console.log(trie)
for (let arg of args.slice(1)) console.log(trie.contains(arg))
