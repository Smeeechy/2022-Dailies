 /*
A group of houses is connected to the main water plant by means of a set of pipes. A house can either be connected by 
a set of pipes extending directly to the plant, or indirectly by a pipe to a nearby house which is otherwise connected.

For example, here is a possible configuration, where A, B, and C are houses, and arrows represent pipes:

A <--> B <--> C <--> plant
Each pipe has an associated cost, which the utility company would like to minimize. Given an undirected graph of pipe 
connections, return the lowest cost configuration of pipes such that each house has access to water.

In the following setup, for example, we can remove all but the pipes from plant to A, plant to B, and B to C, for a 
total cost of 16.

pipes = {
    'plant': {'A': 1, 'B': 5, 'C': 20},
    'A': {'C': 15},
    'B': {'C': 10},
    'C': {}
}
*/

const args = process.argv.splice(2)
const network = JSON.parse(args[0].replaceAll('\'', '\"'))
undirectGraph(network)
const result = findCheapestRoute(network)
let cost = 0
for (const edge of result) {
    cost += edge[2]
    console.log(`${edge[0]}\t<-->\t${edge[1]}\t${edge[2]}`)
}
console.log(`-----------------------------\nTotal cost:\t\t${cost}`)

// example given is implicitly directed, so need to make it explicitly undirected
function undirectGraph(graph) {
    for (const _from in graph) {
        for (const _to in graph[_from]) {
            graph[_to][_from] = graph[_from][_to]
        }
    }
}

function findCheapestRoute(map) {
    let result = []
    for (const key in map) {
        let bestRoute = []
        let bestCost
        let current = map[key]
        for (const route in current) {
            const currentCost = current[route]
            if (currentCost < (bestCost ?? currentCost + 1)) {
                bestRoute = [key, route]
                bestCost = currentCost
            }
        }
        result.push([...bestRoute, bestCost])
    }

    // removing duplicates where to and from are swapped
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i][0] == result[j][1] && result[i][1] == result[j][0]) {
                result.splice(j--, 1)
            }
        }
    }
    return result
}
