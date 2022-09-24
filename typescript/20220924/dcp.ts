/*
Given a positive integer n, find the total number of unique binary tree topologies
that can be created from n binary tree nodes.
*/

interface Cache {
  [key: number]: number
}

export const uniqueBSTTopologies = (n: number, cache: Cache = { 0: 1 }): number => {
  if (n in cache) return cache[n]
  let tCount = 0
  for (let nL = 0; nL < n; nL++) {
    const nR = n - 1 - nL
    const tCountL = uniqueBSTTopologies(nL, cache)
    const tCountR = uniqueBSTTopologies(nR, cache)
    tCount += tCountL * tCountR
  }
  cache[n] = tCount
  return tCount
}

const args = process.argv.slice(2)
const n = parseInt(args[0])
const result = uniqueBSTTopologies(n)
console.log(result)
