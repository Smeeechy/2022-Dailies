/*
Given an ordered list of distinct student grades, determine the minimum 'reward' you can give each student,
and return the sum over the whole class. Rewards are represented as any positive integers.
Reward conditions are:
  1. If a student performed worse than their neighbor, they must receive a strictly smaller reward
  2. If a student performed better than their neighbor, they must receive a strictly greater reward

for example:
scores =  [8, 4, 2, 1, 3, 6, 7, 9, 5]
rewards = [4, 3, 2, 1, 2, 3, 4, 5, 1] note: the last student only needs 1 to meet minimum reward conditions
result = 25 <- sum of minimum rewards array above
*/

const minRewards = scores => {
  // instantiate array of same length as scores but full of minimum possible reward
  const rewards = new Array(scores.length).fill(1)
  // iterate through each score and check against the previous score
  for (let i = 1; i < scores.length; i++) {
    // if they scored greater than the previous score, give them the previous reward + 1
    if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1
    // otherwise keep reward at default 1 and iterate backwards to make sure 
    // all previous neighbors still fulfill minimum reward conditions
    else updateRewardsLeft(scores, rewards, i - 1)
  }
  // return sum of all minimum rewards
  return rewards.reduce((previous, current) => previous + current, 0)
}

// updates rewards table backwards from given index until minimum rewards conditions are again satisfied
const updateRewardsLeft = (scores, rewards, index) => {
  while (index >= 0) {
    // if the current score is greater than the next score but the current reward is only equal, 
    // increase the current reward and move backwards to the previous score to check again
    if (scores[index] > scores[index + 1] && rewards[index] <= rewards[index + 1]) rewards[index--]++
    else break
  }
}

const args = process.argv.slice(2)
const scores = args.map(Number)
const result = minRewards(scores)
console.log(result)
