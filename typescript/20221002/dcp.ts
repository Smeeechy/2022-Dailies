/*
Given a list of airports, a list of routes, and a starting airport, determine the minimum number of new connections 
required to make every airport reachable (directly or through connections) from the starting airport.
Airports are represented by three-letter codes (ex. "JFK").
Routes are represented as pairs of airports, where the first is the origin and the second is the destination (ex. ["JFK", "SFO"]).
*/

type Map = { [key: string]: string[] }

export const airportConnections = (airports: string[], routes: string[][], startingAirport: string): number => {
  // create list of unreachable airports
  let unreachableAirports = getUnreachableAirports(airports, routes, startingAirport)
  // assign each of those a value based on the number of unreachable airports they can reach
  const connectionMap = getConnectionMap(unreachableAirports, routes)
  // sort the unreachableAirports by the number of airports each is connected to using the map created in the previous step
  unreachableAirports = unreachableAirports.sort((a, b) => connectionMap[a].length - connectionMap[b].length)
  // add connections to most valuable airports that are still unreachable and mark them and their connected airports as reachable
  let newConnectionCount = 0
  while (unreachableAirports.length > 0) {
    newConnectionCount++
    const newConnection = unreachableAirports.pop()!
    unreachableAirports = unreachableAirports.filter(airport => !connectionMap[newConnection].includes(airport))
  }
  return newConnectionCount
}

// from the starting airport, filter out reachable airports iteratively and return the remaining list
const getUnreachableAirports = (airports: string[], routes: string[][], startingAirport: string): string[] => {
  let unreachableAirports = [...airports]
  const visited: string[] = []
  const toVisit = [startingAirport]
  while (toVisit.length > 0) {
    const visiting = toVisit.pop()!
    visited.push(visiting)
    unreachableAirports.splice(unreachableAirports.indexOf(visiting), 1)
    for (let [from, to] of routes) {
      if (from === visiting && !visited.includes(to) && !toVisit.includes(to)) toVisit.push(to)
    }
  }
  return unreachableAirports
}

// return an object that maps an origin airport to a list of ALL airports that it can reach (both directly and indirectly)
const getConnectionMap = (airports: string[], routes: string[][]): Map => {
  const map: Map = {}
  for (let airport of airports) {
    const visited: string[] = []
    const toVisit = [airport]
    map[airport] = []
    while (toVisit.length > 0) {
      const visiting = toVisit.pop()!
      visited.push(visiting)
      for (let [from, to] of routes) {
        if (from === visiting && !visited.includes(to) && !toVisit.includes(to)) {
          toVisit.push(to)
          map[airport].push(to)
        }
      }
    }
  }
  return map
}

const args = process.argv.slice(2)
const airports = JSON.parse(args[0])
const routes = JSON.parse(args[1])
const startingAirport = args[2]
const result = airportConnections(airports, routes, startingAirport)
console.log(result)
