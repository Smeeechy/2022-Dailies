/*
Find the minimum number of coins needed to make exact change n using only the given denominations.
*/

const minNumberOfCoinsForChange = (n, denoms) => {
  const coins = denoms.sort((a, b) => a - b)
  let best = new Array(n + 1)
  best.fill(-1)
  best[0] = 0
  for (let coin of coins) {
    for (let target = coin; target <= n; target++) {
      const diff = target - coin
      if (diff >= 0 && best[diff] >= 0) {
        if (best[target] === -1 || 1 + best[diff] < best[target]) best[target] = 1 + best[diff]
      }
    }
  }
  return best[n]
}

const args = process.argv.slice(2)
const n = parseInt(args[0])
const denoms = args.map(Number).slice(1)
const result = minNumberOfCoinsForChange(n, denoms)
console.log(result)