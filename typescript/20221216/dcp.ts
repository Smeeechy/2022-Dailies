/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any 
profit, return 0.
*/

export const maxProfit = (prices: number[]): number => {
  let maxProfit = 0
  let minCost = prices[0]
  for (let i = 1; i < prices.length; i++) {
    minCost = Math.min(minCost, prices[i])
    if (prices[i] - minCost > maxProfit) maxProfit = prices[i] - minCost
  }
  return maxProfit
}

const args = process.argv.slice(2)
const prices = args.map(Number)
const result = maxProfit(prices)
console.log(result)
