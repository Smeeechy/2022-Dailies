/*
Given an array of integers for task durations, find how to pair the tasks to result in the shortest overall execution time.
You always have exactly enough workers to complete two tasks each.
Each worker must finish their first task before starting their second.
All workers work simultaneously.
Result should contain pairs of task indices, not task durations.
*/

const taskAssignment = tasks => {
  tasks = tasks
    .map((duration, index) => [duration, index])
    .sort((a, b) => a[0] - b[0])
  let l = 0
  let r = tasks.length - 1
  let result = []
  while (l < r) result.push([tasks[l++][1], tasks[r--][1]])
  return result
}

const args = process.argv.slice(2)
const tasks = JSON.parse(args[0])
const result = taskAssignment(tasks)
console.log(result)