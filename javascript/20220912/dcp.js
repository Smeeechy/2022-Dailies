/*
Given a list of edges representing an undirected and unweighted graph, determine if the graph is two-edge connected.
A two-edge connected graph contains no edges which, if removed, would disconnect the graph.
*/

const twoEdgeConnectedGraph = graph => {
  // this was an arbitrary decision by those who wrote the tests
  if (graph.length === 0) return true
  // I don't know exactly why but this algorithm doesn't always work unless I sort the graph edges first
  graph = graph.map(edges => edges.sort((a, b) => a - b))
  // creates an array of objects whose time properties are instantiated with their array index + 1
  const info = [...new Array(graph.length).keys()].map(key => ({
    visited: false, // for use in checking for graph connectedness after dfs traversal
    time: key + 1, // short for arrival time, the number of vertices needed to visit to reach this one (including itself)
    minTime: key + 1 // short for minimum ancestor arrival time, the minimum arrival time between all connected vertices
  }))
  depthFirstSearch(0, graph, info)
  // a bridge is a critical edge that, if removed, would disconnect the graph.
  // it's indicated by a node's time being equal to its minTime after all its edges are traversed.
  // when this happens, its minTime is then reduced to -1, which then propagates back to the ancestor node.
  const noBridges = info[0].minTime !== -1
  // if any nodes went unvisited during the above dfs traversal, the graph must be disconnected
  const connected = info.reduce(connectedReducer, { visited: true }).visited
  // by definition, must be connected and not have bridges to be two edge connected
  return noBridges && connected
}

const depthFirstSearch = (vertex, graph, info, edgeToExclude = -1) => {
  const vertexInfo = info[vertex]
  vertexInfo.visited = true
  const edges = graph[vertex]
  for (const edge of edges) {
    // to avoid going backwards to its calling vertex
    if (edge === edgeToExclude) continue
    if (!info[edge].visited) depthFirstSearch(edge, graph, info, vertex)
    vertexInfo.minTime = Math.min(vertexInfo.minTime, info[edge].minTime)
  }
  // if after checking all its connected vertices it still has an equal
  // time and minTime, propagate a -1 all the way back to the origin
  if (vertex !== 0 && vertexInfo.minTime === vertexInfo.time) vertexInfo.minTime = -1
}

// just extrapolated this to avoid ugliness in twoEdgeConnectedGraph
const connectedReducer = (accumulator, next) => {
  const bothVisited = accumulator.visited && next.visited
  return { visited: bothVisited }
}

const args = process.argv.slice(2)
const edges = JSON.parse(args[0])
const result = twoEdgeConnectedGraph(edges)
console.log(result)
