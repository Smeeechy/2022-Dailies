/*
Given a target total n and a list of available coin denominations, find the total number of ways you can make change for the given target total.
*/

// I commented the hell out of this one because
//  1. I want to get into the habit of doing so regardless, and
//  2. I kinda struggle with wrapping my head around dynamic programming in general, and being 
//     extremely granular about what I'm doing really helps me understand better.

const numberOfWaysToMakeChange = (n, denoms) => {
  // create an array to keep track of the number of ways we know to make change for any arbitrary total up to 
  // and including n, and to start off we know of 0 ways to make change for each total
  const result = new Array(n + 1).fill(0)

  // but we do know that there is always 1 way to make change for 0, which is to use 0 coins
  result[0] = 1

  // then for each denomination we have available, we iterate through our result array
  for (const denom of denoms) {
    // for totals less than the current denomination, it doesn't offer any new ways to make change
    // so for performance we can just skip them and start with the current denomination value as the current target total
    for (let num = denom; num < result.length; num++) {
      // then we take the number of ways we currently know for that total and add to it the number of ways we know how to make change 
      // for the difference between the denomination and current target total
      // ie. if our target is 7 and we have [1, 5] denominations,
      //     given we've already know we can make any total with all ones   ($7 = 7x$1)
      //     we then know we can also make it with a $5 PLUS however many
      //        ways we can make the difference of $2                       ($7 = 1x$5 + <all the ways to make $2>)
      //     which in this case is just 1 way                               ($2 = 2x$1)
      //     so we update our result to include those new ways              ($7 = 7x$1   OR  1x$5 + 2x$1)
      result[num] += result[num - denom]
    }
  }

  // then we return the only result we care about, which is the last element of our result array
  return result.pop()
}

const args = process.argv.slice(2)
const target = parseInt(args[0])
const denominations = args.slice(1).map(Number)
const result = numberOfWaysToMakeChange(target, denominations)
console.log(result)