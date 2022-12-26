/*
Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo 
attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More 
formally, an attack at second t will mean Ashe is poisoned during the 
inclusive time interval [t, t + duration - 1]. If Teemo attacks again 
before the poison effect ends, the timer for it is reset, and the poison 
effect will end duration seconds after the new attack.

You are given a non-decreasing integer array timeSeries, where timeSeries[i] 
denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

Return the total number of seconds that Ashe is poisoned.
*/

export const findPoisonedDuration = (timeSeries: number[], duration: number): number => {
  const intervals = timeSeries.map(time => [time, time + duration - 1])
  condense(intervals)
  return intervals.reduce((acc, [start, end]) => acc + end - start + 1, 0)
}

const condense = (intervals: number[][]): void => {
  for (let i = 0; i < intervals.length - 1; i++) {
    const [start0, end0] = intervals[i]
    const [start, end] = intervals[i + 1]
    if (end0 >= start) intervals.splice(i--, 2, [start0, end])
  }
}

const args = process.argv.slice(2)
const duration = parseInt(args[0])
const timeSeries = args.slice(1).map(Number)
const result = findPoisonedDuration(timeSeries, duration)
console.log(result)
