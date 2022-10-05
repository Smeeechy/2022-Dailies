/*
Given an adjacency list and a starting node, find the shortest path from the starting node
to every other node using the Bellman Ford algorithm. If a node is not reachable from the 
starting node, it's shortest path should equal -1.

For this problem, the edges are directed and will never have costs < 0.
There will also never be any self-loops.
*/

export const bellmanFordAlgorithm = (start: number, edges: number[][][]): number[] => {
  const shortestPaths: number[] = new Array(edges.length).fill(Infinity)
  shortestPaths[start] = 0
  for (let iter = 0; iter < edges.length; iter++) relaxEdges(edges, shortestPaths)
  return shortestPaths.map(path => (path === Infinity ? -1 : path))
}

const relaxEdges = (edges: number[][][], shortestPaths: number[]): void => {
  for (let vertex = 0; vertex < edges.length; vertex++) {
    const currentBest = shortestPaths[vertex]
    for (let edge = 0; edge < edges[vertex].length; edge++) {
      const [destination, weight] = edges[vertex][edge]
      shortestPaths[destination] = Math.min(currentBest + weight, shortestPaths[destination])
    }
  }
}

const args = process.argv.slice(2)
const edges = JSON.parse(args[0])
const start = parseInt(args[1])
const result = bellmanFordAlgorithm(start, edges)
console.log(result)
