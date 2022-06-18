/*
given a 2d array of exchange rates, determine whether or not an arbitrage exists
*/

const detectArbitrage = exchangeRates => {
    // convert currency rates to their negative logarithms so we can use the bellman-ford algorithm
    const negLogRates = exchangeRates.map(currency => currency.map(edge => -Math.log(edge)))

    // find all cycles in the graph using bellman-ford
    // initialize cost array with all maximum costs except first element
    const costs = new Array(negLogRates.length).fill(Infinity)
    costs[0] = 0

    // relax all edges n - 1 times, here n is the length of negLogRates
    for (let iter = 0; iter < negLogRates.length - 1; iter++) {
        relax(negLogRates, costs)
    }

    // take snapshot of current costs and relax one more time
    const costSnapshot = [...costs]
    relax(negLogRates, costs)
    for (let i = 0; i < costs.length; i++) {
        // if any costs change a negative cycle (or arbitrage) exists
        if (costSnapshot[i] !== costs[i]) return true
    }
    return false
}

const relax = (graph, costs) => {
    for (let i = 0; i < costs.length; i++) {
        // for each starting node, take its current minimum cost 
        const initialCost = costs[i]
        // iterate through its connected edges
        for (let j = 0; j < costs.length; j++) {
            const newCost = initialCost + graph[i][j]
            // update with new minimum if necessary
            if (newCost < costs[j]) costs[j] = newCost
        }
    }
}

const args = process.argv.slice(2)
const rates = JSON.parse(args[0])
const result = detectArbitrage(rates)
console.log(result)