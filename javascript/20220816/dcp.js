/*
Given a list of jobs and an array of dependencies, find a valid ordering of jobs.
Each dependency is represented as a pair of jobs with the first being a prerequisite for the second.
If no valid ordering exists, return an empty array.
*/

const topologicalSort = (jobs, deps) => {
  const result = []
  for (const job of jobs) {
    addJob(job, deps, result)
  }
  return result.length === jobs.length ? result : []
}

const addJob = (job, dependencies, result, stack = []) => {
  if (result.includes(job)) return
  if (stack.includes(job)) return result.push(0)
  stack.push(job)
  const prerequisites = dependencies
    .filter(([_, dependency]) => dependency === job)
    .map(([prerequisite, _]) => prerequisite)
  for (const prerequisite of prerequisites) {
    addJob(prerequisite, dependencies, result, stack)
  }
  result.push(job)
}

const args = process.argv.slice(2)
const jobs = JSON.parse(args[0])
const deps = JSON.parse(args[1])
const result = topologicalSort(jobs, deps)
console.log(result)