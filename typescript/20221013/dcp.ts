/*
Given a matrix of characters and a list of words, determine all the words that can be found in the
matrix by connecting characters in any direction and without using any element more than
once for a single word.

For more info, look up the rules of Boggle.
*/

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

// this is a convoluted mess but it's late and i'm tired and, most importantly, it works!
// so i'm not gonna annotate/refactor it
export const boggleBoard = (board: string[][], words: string[]): string[] => {
  const trie = new SuffixTrie()
  for (let word of words) trie.add(word)
  const result: string[] = []

  const dfs = (row: number, col: number, node: TrieNode, used: number[][] = []): void => {
    if ('*' in node) result.push(node['*'] as string)
    const getNeighbors = (): number[][] => {
      let neighbors: number[][] = []
      for (let r = row - 1; r <= row + 1; r++) {
        if (r < 0 || r >= board.length) continue
        for (let c = col - 1; c <= col + 1; c++) {
          if (c < 0 || c >= board[row].length) continue
          if (r === row && c === col) continue
          neighbors.push([r, c])
        }
      }
      used.forEach(([usedRow, usedCol]) => {
        neighbors = neighbors.filter(([r, c]) => r !== usedRow || c !== usedCol)
      })
      return neighbors
    }

    const neighbors = getNeighbors()
    for (let [neighborRow, neighborCol] of neighbors) {
      const char = board[neighborRow][neighborCol]
      if (char in node) dfs(neighborRow, neighborCol, node[char] as TrieNode, [...used, [row, col]])
    }
  }

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const char = board[row][col]
      if (char in trie.root) dfs(row, col, trie.root[char] as TrieNode)
    }
  }
  return words.filter(word => result.includes(word))
}

const args = process.argv.slice(2)
const board = JSON.parse(args[0])
const words = args.slice(1)
const result = boggleBoard(board, words)
console.log(result)
