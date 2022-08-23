/*
Given a list of measuring cups each with only a low and high measurement, 
determine if there exists any combination of cups that can accurately measure between a target range.
*/

const ambiguousMeasurements = (measuringCups, low, high) => {
  if (low < 0 && high < 0) return false
  for (const [lo, hi] of measuringCups) {
    if (lo >= low && hi <= high) return true
  }
}

const args = process.argv.slice(2)
