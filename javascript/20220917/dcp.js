/*
Given starting coordinates, ending coordinates, and a grid, use the A* algorithm to find and return
an array representing the most optimal path from start to end.
The grid will contain ones and zeros, representing walls and open spaces respectively.
The given start and end coordinates will always be valid and there will always be a path between them.
For this problem, only consider moves in the cardinal directions (no diagonal movement).
*/

class Grid {
  constructor(matrix, startRow, startCol, endRow, endCol) {
    this.startRow = startRow
    this.startCol = startCol
    this.endRow = endRow
    this.endCol = endCol
    this.rows = matrix.length
    this.cols = matrix[0].length
    this.toCheck = []
    this.nodes = new Array(this.rows).fill().map(_ => new Array(this.cols))
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        this.nodes[row][col] = matrix[row][col] === 0 ? new Node(row, col, Infinity, this.getHScore(row, col), Infinity) : null
      }
    }
    this.nodes[startRow][startCol].gScore = 0
    this.addNeighborsToCheck(startRow, startCol)
  }

  getHScore(row, col) {
    return Math.abs(this.endRow - row) + Math.abs(this.endCol - col)
  }

  getNeighbors(row, col) {
    const neighbors = []
    if (row - 1 >= 0) neighbors.push(this.nodes[row - 1][col])
    if (row + 1 < this.rows) neighbors.push(this.nodes[row + 1][col])
    if (col - 1 >= 0) neighbors.push(this.nodes[row][col - 1])
    if (col + 1 < this.cols) neighbors.push(this.nodes[row][col + 1])
    return neighbors.filter(neighbor => neighbor)
  }

  addNeighborsToCheck(row, col) {
    // add neighbors that aren't already in toCheck
    const neighbors = this.getNeighbors(row, col)
    for (let neighborToCheck of this.toCheck) {
      neighbors.filter(neighbor =>
        neighbor.row === neighborToCheck.row &&
        neighbor.col === neighborToCheck.col)
    }

    // sort toCheck
    this.toCheck.sort((a, b) => b.fScore - a.fScore)
  }

  getNextNodeToCheck() {
    return this.toCheck.pop()
  }
}

class Node {
  constructor(rowIndex, colIndex, gScore, hScore, fScore) {
    this.rowIndex = rowIndex
    this.colIndex = colIndex
    this.gScore = gScore
    this.hScore = hScore
    this.fScore = fScore
    this.lastUpdatedBy = null
  }
}

const aStarAlgorithm = (startRow, startCol, endRow, endCol, graph) => {
  const grid = new Grid(graph, startRow, startCol, endRow, endCol)
  let lastNode = null
  while (grid.toCheck.length > 0) {
    const node = grid.getNextNodeToCheck()
    if (node.row === grid.endRow && node.col === grid.endCol) {
      // iterate backwards through each node's lastUpdatedBy until there isn't one
      const path = [[node.row, node.col]]
      // TODO: implement this

      return node
    } else {
      // evaluate the current node: update scores and add neighbors to toCheck
      lastNode = node
    }
  }
}

const args = process.argv.slice(2)
const graph = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0]
]
const result = aStarAlgorithm(0, 1, 4, 3, graph)
console.log(result)