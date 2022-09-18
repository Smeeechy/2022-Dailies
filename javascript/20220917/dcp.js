/*
Given starting coordinates, ending coordinates, and a grid, use the A* algorithm to find and return
an array of coordinates representing an optimal path from start to end.
The grid will contain ones and zeros, representing walls and open spaces respectively.
The given starting and ending coordinates will always be valid.
For this problem, only consider moves in the cardinal directions (no diagonal movement).
If there is no valid path between the starting and ending coordinates, return an empty array.
*/

class Grid {
  constructor(startRow, startCol, endRow, endCol, matrix) {
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
        if (matrix[row][col] === 0) {
          this.nodes[row][col] = {
            row,
            col,
            gScore: Infinity,
            hScore: this.getHScore(row, col),
            fScore: Infinity
          }
        }
      }
    }

    const startNode = this.nodes[startRow][startCol]
    startNode.gScore = 0
    startNode.fScore = startNode.gScore + startNode.hScore
    this.addNeighborsToCheck(startNode)
  }

  // uses manhattan distance because this problem doesn't allow diagonal movement
  getHScore(row, col) {
    return Math.abs(this.endRow - row) + Math.abs(this.endCol - col)
  }

  getNeighbors(row, col) {
    const neighbors = []
    if (row - 1 >= 0) neighbors.push(this.nodes[row - 1][col])
    if (row + 1 < this.rows) neighbors.push(this.nodes[row + 1][col])
    if (col - 1 >= 0) neighbors.push(this.nodes[row][col - 1])
    if (col + 1 < this.cols) neighbors.push(this.nodes[row][col + 1])
    // filter out null values (walls) before returning
    return neighbors.filter(neighbor => neighbor)
  }

  addNeighborsToCheck(node) {
    const { row, col } = node
    // create list of only neighbors whose fScore is improved by node's gScore
    const neighbors = this.getNeighbors(row, col)
    const neighborsToAdd = []
    neighbors.forEach(neighbor => {
      if (neighbor.gScore > node.gScore + 1) {
        neighbor.gScore = node.gScore + 1
        neighbor.fScore = neighbor.gScore + neighbor.hScore
        neighbor.lastUpdatedBy = node
        neighborsToAdd.push(neighbor)
      }
    })
    // filter out neighbors that are already in toCheck
    for (let neighborToCheck of this.toCheck) {
      neighborsToAdd.filter(neighbor => neighbor.row === neighborToCheck.row && neighbor.col === neighborToCheck.col)
    }
    this.toCheck.push(...neighborsToAdd)
  }

  getNextNodeToCheck() {
    // sort first to always return the lowest fScore node
    return this.toCheck.sort((a, b) => b.fScore - a.fScore).pop()
  }
}

const aStarAlgorithm = (startRow, startCol, endRow, endCol, graph) => {
  const grid = new Grid(startRow, startCol, endRow, endCol, graph)
  while (grid.toCheck.length > 0) {
    const node = grid.getNextNodeToCheck()
    if (node.row === grid.endRow && node.col === grid.endCol) {
      // iterate backwards through each node's lastUpdatedBy until there isn't one
      const path = []
      let current = node
      while (current) {
        path.push([current.row, current.col])
        current = current.lastUpdatedBy
      }
      return path.reverse()
    } else grid.addNeighborsToCheck(node)
  }
  return []
}

const args = process.argv.slice(2)
const startRow = parseInt(args[0])
const startCol = parseInt(args[1])
const endRow = parseInt(args[2])
const endCol = parseInt(args[3])
const graph = JSON.parse(args[4])
const result = aStarAlgorithm(startRow, startCol, endRow, endCol, graph)
console.log(result)
