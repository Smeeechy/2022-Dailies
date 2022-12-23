/*
Assume you are an awesome parent and want to give your children some cookies. 
But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie 
that the child will be content with; and each cookie j has a size s[j]. 
If s[j] >= g[i], we can assign the cookie j to the child i, and the child i 
will be content. Your goal is to maximize the number of your content children 
and output the maximum number.
*/

export const findContentChildren = (g: number[], s: number[]): number => {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let gi = 0
  let si = 0
  while (gi < g.length && si < s.length) {
    if (s[si] >= g[gi]) gi++
    si++
  }
  return gi
}

const args = process.argv.slice(2)
const g = JSON.parse(args[0])
const s = JSON.parse(args[1])
const result = findContentChildren(g, s)
console.log(result)
