/*
Given a staircase height and a maximum number of steps you're allowed to step over in one stride, determine the number of unique ways you can traverse the staircase.
*/

const staircaseTraversal = (height, maxSteps) => {
  if (height < 2) return 1
  else {
    let total = 0
    for (let step = 1; step <= maxSteps && step <= height; step++) {
      total += staircaseTraversal(height - step, maxSteps)
    }
    return total
  }
}

const args = process.argv.slice(2)
const height = parseInt(args[0])
const steps = parseInt(args[1])
console.time()
const result = staircaseTraversal(height, steps)
console.timeEnd()
console.log(result)