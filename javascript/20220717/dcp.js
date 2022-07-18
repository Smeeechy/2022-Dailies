/*
Find the minimum number of coins needed to make exact change n using only the given denominations.
*/

const minNumberOfCoinsForChange = (n, denoms) => {
  const coins = denoms.sort((a, b) => a - b)
  let best = [0]
  for (let coin of coins) {
    for (let target = 0; target <= n; target++) {
      if (coin <= target) {
        const diff = target - coin
        best[target] = 1 + (best[diff] ?? Infinity)
      } else {
        if (isNaN(best[target])) best[target] = Infinity
      }
    }
  }
  if (best[n - 1] === Infinity) return -1
  else return best[n - 1]
}

const args = process.argv.slice(2)
const n = parseInt(args[0])
const denoms = args.map(Number).slice(1)
const result = minNumberOfCoinsForChange(n, denoms)
console.log(result)