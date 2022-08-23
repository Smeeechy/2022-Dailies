/*
Given a list of measuring cups each with only a low and high measurement, 
determine if there exists any combination of cups that can accurately measure between a target range.
*/

const ambiguousMeasurements = (measuringCups, low, high, memo = {}) => {
  if ((low < 0 && high < 0) || low > high) return false
  if ([low, high] in memo) return memo[[low, high]]
  for (const [cupLow, cupHigh] of measuringCups) {
    if (cupLow >= low && cupHigh <= high) return true
    if (ambiguousMeasurements(measuringCups, low - cupLow, high - cupHigh, memo)) return true
  }
  memo[[low, high]] = false
  return false
}

const args = process.argv.slice(2)
const cups = JSON.parse(args[0])
const low = parseInt(args[1])
const high = parseInt(args[2])
const result = ambiguousMeasurements(cups, low, high)
console.log(result)