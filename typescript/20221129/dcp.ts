/*
You are given an integer array "score" of size n, where score[i] is the score of the ith athlete in a competition.
All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place 
athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

The 1st place athlete's rank is "Gold Medal".
The 2nd place athlete's rank is "Silver Medal".
The 3rd place athlete's rank is "Bronze Medal".
For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
Return an array answer of size n where answer[i] is the rank of the ith athlete.
*/

export const findRelativeRanks = (scores: number[]): string[] => {
  const originalIndices = Object.fromEntries(scores.map((score, index) => [score, index]))
  const orderedScores = scores.sort((a, b) => b - a)
  const result: string[] = []
  orderedScores.forEach((score, rank) => {
    const originalIndex = originalIndices[score]
    if (rank === 0) result[originalIndex] = 'Gold Medal'
    else if (rank === 1) result[originalIndex] = 'Silver Medal'
    else if (rank === 2) result[originalIndex] = 'Bronze Medal'
    else result[originalIndex] = `${rank + 1}`
  })
  return result
}

const args = process.argv.slice(2)
const scores = args.map(Number)
const result = findRelativeRanks(scores)
console.log(result)
