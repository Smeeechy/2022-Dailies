/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.
*/

export const guessNumber = (n: number): number => {
  let low = 0
  let high = n
  let mid: number
  while (true) {
    mid = ~~((low + high) / 2)
    if (guess(mid) === -1) high = mid - 1
    else if (guess(mid) === 1) low = mid + 1
    else return mid
  }
}

const guess = (num: number): number => {
  if (num > actual) return -1
  if (num < actual) return 1
  return 0
}

const args = process.argv.slice(2)
const n = parseInt(args[0])
const actual = ~~(Math.random() * n)
const result = guessNumber(n)
console.log(result)
