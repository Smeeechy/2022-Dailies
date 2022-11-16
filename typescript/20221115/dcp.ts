/*
Given an integer turnedOn which represents the number of LEDs that are 
currently on (ignoring the PM), return all possible times the watch could 
represent. You may return the answer in any order.

The hour must not contain a leading zero.

For example, "01:00" is not valid. It should be "1:00".
The minute must be consist of two digits and may contain a leading zero.

For example, "10:2" is not valid. It should be "10:02".
*/

export const readBinaryWatch = (turnedOn: number): string[] => {
  const combinations = generateBinaryCombinations(turnedOn)
  return combinations.filter(combo => isValidTime(combo)).map(combo => timeFormat(combo))
}

// each combo is in the format of [8h, 4h, 2h, 1h, 32m, 16m, 8m, 4m, 2m, 1m]
// where each flag is either 1 or 0 and joined into a single string: '1000011110' for 8:30
const generateBinaryCombinations = (n: number, prev?: string[]): string[] => {
  if (!prev) prev = [new Array(10).fill(0).join('')]
  if (n === 0) return prev
  const result = new Set<string>()
  for (const time of prev) {
    for (let i = 0; i < time.length; i++) {
      if (time[i] === '0') {
        const newTime = time.split('')
        newTime[i] = '1'
        result.add(newTime.join(''))
      }
    }
  }
  return generateBinaryCombinations(n - 1, [...result])
}

const isValidTime = (time: string): boolean => {
  const hours = time.split('').slice(0, 4).map(Number)
  if (hours[0] * 8 + hours[1] * 4 + hours[2] * 2 + hours[3] > 11) return false

  const mins = time.split('').slice(4).map(Number)
  if (mins[0] * 32 + mins[1] * 16 + mins[2] * 8 + mins[3] * 4 + mins[4] * 2 + mins[5] > 59) return false

  return true
}

const timeFormat = (time: string): string => {
  const binTime = time.split('').map(Number)
  const hours = binTime[0] * 8 + binTime[1] * 4 + binTime[2] * 2 + binTime[3]
  const mins = binTime[4] * 32 + binTime[5] * 16 + binTime[6] * 8 + binTime[7] * 4 + binTime[8] * 2 + binTime[9]
  return `${hours}:${mins < 10 ? '0' + mins : mins}`
}

const args = process.argv.slice(2)
const result = readBinaryWatch(+args[0])
console.log(result)
