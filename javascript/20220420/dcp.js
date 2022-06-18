/*
Given an array of numbers representing the stock prices of a company in chronological order and an integer k, return the 
maximum profit you can make from k buys and sells. You must buy the stock before you can sell it, and you must sell the 
stock before you can buy it again.

For example, given k = 2 and the array [5, 2, 4, 0, 1], you should return 3.
*/

const args = process.argv.slice(2)
const k = parseInt(args[0])
const arr = args.slice(1)
const results = stonks(k, arr)

let index = 0
for (const result of results[0]) {
    console.log(`${++index}: B/S@\t${arr[result[0]]}/${arr[result[1]]} = \t\$${result[2]}`)
}
console.log(`Total:\t\t\$${results[1]}`)


function stonks(tradeLimit, prices) {
    // compare all pairs of prices and store profitable pairs
    let validTrades = []
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i]
            if (profit > 0) validTrades.push([i, j, profit])
        }
    }

    // starting with each valid trade, find the maximum profit
    let bestTrades = []
    let bestTradeSum = -1
    for (let i = 0; i < validTrades.length; i++) {
        let currentTrades = [validTrades[i]]
        let tradeCount = 1
        while (tradeCount < tradeLimit) {
            let filteredTrades = [...validTrades].filter(trade => trade[0] > currentTrades[currentTrades.length - 1][1])
            filteredTrades.sort((t1, t2) => t2[2] - t1[2])
            // console.log('current:', currentTrades, 'filtered:', filteredTrades)
            if (filteredTrades.length > 0) currentTrades.push(filteredTrades[0])
            tradeCount++
        }
        // sum up and compare profit of all trades in currentTrades and bestTrades
        let currentSum = 0
        for (const trade of currentTrades) currentSum += trade[2]
        if (currentSum > bestTradeSum) {
            bestTrades = [...currentTrades]
            bestTradeSum = currentSum
        }
    }
    return [bestTrades, bestTradeSum]
}
