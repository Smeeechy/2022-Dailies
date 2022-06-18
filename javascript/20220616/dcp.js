/*
Find the minimum number of connections needed to reach any airport from a given starting airport.
*/

// yet to implement use of starting airport but i think everything else is working fine
const airportConnections = (airports, routes, startingAirport) => {
    const outgoingFlights = {}
    const incomingFlights = {}

    airports.forEach(airport => {
        outgoingFlights[airport] = routes
            .filter(route => route[0] === airport)
            .map(route => route[1])
        incomingFlights[airport] = routes
            .filter(route => route[1] === airport)
            .map(route => route[0])
    })

    let unreachables = Object.entries(incomingFlights)
        .filter(entry => entry[1].length === 0)
        .flat(2)
        .sort((airport1, airport2) => outgoingFlights[airport2] - outgoingFlights[airport1])
    connectionsNeeded = 0
    const reachables = []
    unreachables.forEach(unreachable => {
        const connections = outgoingFlights[unreachable]
        connections.forEach(connection => {
            if (unreachables.includes(connection) && !reachables.includes(connection)) {
                connectionsNeeded++
                reachables.push(connection)
            }
        })
    })
    connectionsNeeded += unreachables.length - reachables.length
    return connectionsNeeded
}

const args = process.argv.slice(2)
const airports = JSON.parse(args[0])
const routes = JSON.parse(args[1])
const startingAirport = args[2]
const result = airportConnections(airports, routes, startingAirport)
console.log(result)
