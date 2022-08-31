/*
Given a list each of yours and a coworker's meeting times for a day, each of your earliest and latest 
availability times, and a meeting duration, return a list of all valid open timeblocks for the meeting.
*/

// helper methods for converting time strings to ints and vice versa
String.prototype.toMins = function () {
  const [hours, minutes] = this.split(':').map(Number)
  return hours * 60 + minutes
}

Number.prototype.toTime = function () {
  const hours = new String(parseInt(this / 60))
  const minutes = new String(this % 60).padStart(2, '0')
  return hours + ':' + minutes
}

const calendarMatching = (calendarOne, availabilityOne, calendarTwo, availabilityTwo, duration) => {
  // prepping data
  // converting time strings to ints for total minutes
  calendarOne = calendarOne.map(appt => appt.map(time => time.toMins()))
  calendarTwo = calendarTwo.map(appt => appt.map(time => time.toMins()))
  // sorting and merging the two calendars
  const unmergedCalendar = [...calendarOne, ...calendarTwo].sort((a, b) => a[0] - b[0])
  const calendar = merge(unmergedCalendar)
  // merging availability timeframe
  const [earliestOne, latestOne] = availabilityOne
  const [earliestTwo, latestTwo] = availabilityTwo
  const availability = [
    Math.max(earliestOne.toMins(), earliestTwo.toMins()),
    Math.min(latestOne.toMins(), latestTwo.toMins())
  ]

  // accounting for zero/negative joint availability overlap
  const [earliest, latest] = availability
  if (earliest >= latest || latest - earliest < duration) return []

  // brute force check every 15 mins between joint availability timeframe
  const validMeetingTimes = []
  for (let start = earliest; start <= latest + duration; start += 15) {
    const meeting = [start, start + duration]
    if (isValidMeetingTime(calendar, availability, meeting)) validMeetingTimes.push(meeting)
  }

  // condense valid meetings into list of valid time blocks
  const timeBlocks = merge(validMeetingTimes)

  // reformatting and returning valid meeting blocks
  return timeBlocks.map(timeBlock => timeBlock.map(minutes => minutes.toTime()))
}

// meeting is valid if:
// 1. it is inside the joint availability timeframe
// 2. it doesn't overlap with any appointments from calendar
const isValidMeetingTime = (calendar, availability, meeting) => {
  const [earliest, latest] = availability
  const [meetingStart, meetingEnd] = meeting

  // check if meeting is outside joint availability timeframe
  if (meetingStart < earliest || meetingEnd > latest) return false

  // check against calendar appointments
  for (const [apptStart, apptEnd] of calendar) {
    if (meetingStart >= apptStart && meetingStart < apptEnd) return false
    if (meetingEnd > apptStart && meetingEnd <= apptEnd) return false
  }

  return true
}

// helper method for merging overlapping timeframes
const merge = array => {
  const merged = []
  let block = []
  for (const [start, end] of array) {
    if (block.length === 0) block = [start, end]
    else {
      const [blockStart, blockEnd] = block
      if (start > blockEnd) {
        merged.push(block)
        block = [start, end]
      } else if (start <= blockEnd && end > blockEnd) block = [blockStart, end]
    }
  }
  if (block.length !== 0) merged.push(block)
  return merged
}

const args = process.argv.slice(2)
const calendarOne = JSON.parse(args[0])
const availabilityOne = JSON.parse(args[1])
const calendarTwo = JSON.parse(args[2])
const availabilityTwo = JSON.parse(args[3])
const duration = parseInt(args[4])
const result = calendarMatching(calendarOne, availabilityOne, calendarTwo, availabilityTwo, duration)
console.log(result)
