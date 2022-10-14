/*

*/

import { deflateSync } from 'zlib'

type TrieNode = {
  [key: string]: TrieNode | string
}

class SuffixTrie {
  root: TrieNode = {}

  add(word: string) {
    let current = this.root
    for (let char of word) {
      if (!(char in current)) current[char] = {}
      current = current[char] as TrieNode
    }
    current['*'] = word
  }
}

export const boggleBoard = (board: string[][], words: string[]): string[] => {
  const trie = new SuffixTrie()
  for (let word of words) trie.add(word)

  const dfs = (row: number, col: number, used: number[][] = []): void => {}

  const getNeighbors = (row: number, col: number, used: number[][]): number[][] => {
    const neighbors: number[][] = []
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (r === row && c === col) continue
        for (let [x, y] of used) {
        }
      }
    }
    return neighbors
  }

  const result: string[] = []
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] in trie.root) {
        dfs(row, col)
      }
    }
  }
  return result
}

const args = process.argv.slice(2)
const board = [
  ['t', 'h', 'i', 's', 'i', 's', 'a'],
  ['s', 'i', 'm', 'p', 'l', 'e', 'x'],
  ['b', 'x', 'x', 'x', 'x', 'e', 'b'],
  ['x', 'o', 'g', 'g', 'l', 'x', 'o'],
  ['x', 'x', 'x', 'D', 'T', 'r', 'a'],
  ['R', 'E', 'P', 'E', 'A', 'd', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['N', 'O', 'T', 'R', 'E', '-', 'P'],
  ['x', 'x', 'D', 'E', 'T', 'A', 'E']
]
const words = ['this', 'is', 'not', 'a', 'simple', 'boggle', 'board', 'test', 'REPEATED', 'NOTRE-PEATED']
const result = boggleBoard(board, words)
console.log(result)
