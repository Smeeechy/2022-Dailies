/*
Given a list representing stock prices per day and an integer k, determine the maximum profit 
you can earn by only making k transactions. You can only own 1 share at a time, and you can only
buy a new share the day after selling.
*/

const maxProfitKTransactions = (prices, k) => {
  if (prices.length === 0) return 0
  const profit = new Array(k + 1).fill().map(_ => new Array(prices.length).fill(0))
  for (let transaction = 1; transaction <= k; transaction++) {
    for (let day = 1; day < prices.length; day++) {
      let best = -Infinity
      for (let x = 0; x < day; x++) {
        const current = -prices[x] + profit[transaction - 1][x]
        if (current > best) best = current
      }
      profit[transaction][day] = Math.max(profit[transaction][day - 1], prices[day] + best)
    }
  }
  return profit[profit.length - 1][prices.length - 1]
}

const args = process.argv.slice(2)
const k = parseInt(args[0])
const prices = args.slice(1).map(Number)
const result = maxProfitKTransactions(prices, k)
console.log(result)
