/*
Given an org chart of employees, find the lowest common manager between two direct reports.
*/

const getLowestCommonManager = (topManager, reportOne, reportTwo) => {
  let result, current
  let next = [topManager, ...topManager.directReports]
  while (next.length > 0) {
    current = next.pop()
    next.push(...current.directReports)
    let count = countTargets(current, reportOne, reportTwo)
    if (count === 2) result = current
  }
  return result
}

const countTargets = (root, target1, target2) => {
  let count = 0
  if (root.name === target1.name || root.name === target2.name) count++
  for (let report of root.directReports) {
    count += countTargets(report, target1, target2)
  }
  return count
}

const args = process.argv.slice(2)
const orgChart = JSON.parse(args[0])
const reportOne = JSON.parse(args[1])
const reportTwo = JSON.parse(args[2])
const result = getLowestCommonManager(orgChart, reportOne, reportTwo)
console.log(result.name)