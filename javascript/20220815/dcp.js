/*
Given a graph of edges, determine whether or not a cycle exists in the graph.
*/

const cycleInGraph = edges => {
  let cycle = false
  for (const edge in edges) {
    cycle = cycleFrom(edge, edges)
    if (cycle) return true
  }
  return false
}

const cycleFrom = (
  vertex,
  edges,
  visited = new Array(edges.length).fill(false),
  stack = new Array(edges.length).fill(false)
) => {
  if (stack[+vertex]) return true
  let cycle = false
  visited[+vertex] = true
  stack[+vertex] = true
  for (const child of edges[+vertex]) {
    if (visited[child]) {
      if (stack[child]) return true
      else continue
    }
    cycle = cycleFrom(child, edges, [...visited], [...stack])
    if (cycle) return true
  }
  return false
}

const args = process.argv.slice(2)
const edges = JSON.parse(args[0])
const result = cycleInGraph(edges)
console.log(result)