/*
Given a list each of yours and a coworker's meeting times for a day, each
of your earliest and latest avail times, and a meeting duration, return a
list of all valid potential meeting times.
*/

// helper functions for converting time strings to ints and vice versa
String.prototype.toMins = function () {
  const [hours, minutes] = this.split(':').map(Number)
  return hours * 60 + minutes
}

Number.prototype.toTime = function () {
  const hours = new String(parseInt(this / 60))
  const minutes = new String(this % 60).padStart(2, '0')
  return hours + ':' + minutes
}

const calendarMatching = (calOne, availOne, calTwo, availTwo, duration) => {
  // prepping data - converting time strings to ints for total minutes
  calOne = calOne
    .map(appt => appt.map(time => time.toMins()))
    .sort((a, b) => a[0] - b[0])
  calTwo = calTwo
    .map(appt => appt.map(time => time.toMins()))
    .sort((a, b) => a[0] - b[0])
  const avail = [
    Math.max(availOne[0].toMins(), availTwo[0].toMins()),
    Math.min(availOne[1].toMins(), availTwo[1].toMins())
  ]

  // accounting for zero/negative avail overlap
  if (avail[0] >= avail[1] || avail[1] - avail[0] < duration) return []

  // brute force check every 15 mins between joint availability frame
  const meetings = []
  for (let start = avail[0]; start <= avail[1] + duration; start += 15) {
    const meeting = [start, start + duration]
    if (isValidMeeting(calOne, calTwo, avail, meeting)) meetings.push(meeting)
  }

  // condense valid meetings into list of valid time blocks
  const timeBlocks = []
  let timeBlock = []
  for (const [meetingStart, meetingEnd] of meetings) {
    if (timeBlock.length === 0) timeBlock = [meetingStart, meetingEnd]
    else {
      const [blockStart, blockEnd] = timeBlock
      if (meetingStart > blockEnd) {
        timeBlocks.push(timeBlock)
        timeBlock = [meetingStart, meetingEnd]
      } else if (meetingStart <= blockEnd && meetingEnd > blockEnd) {
        timeBlock = [blockStart, meetingEnd]
      }
    }
  }
  if (timeBlock.length !== 0) timeBlocks.push(timeBlock)

  // reformatting and returning valid meeting blocks
  return timeBlocks.map(([blockStart, blockEnd]) => [
    blockStart.toTime(),
    blockEnd.toTime()
  ])
}

// meeting is valid if:
// 1. it is between the joint availability timeframe
// 2. it doesn't overlap with any appointments from either calendar
const isValidMeeting = (calOne, calTwo, avail, meeting) => {
  const [earliestAvail, latestAvail] = avail
  const [meetingStart, meetingEnd] = meeting

  // check if meeting is outside joint availability timeframe
  if (meetingStart < earliestAvail || meetingEnd > latestAvail) return false

  // check against first calendar appointments
  for (const [apptStart, apptEnd] of calOne) {
    if (meetingStart >= apptStart && meetingStart < apptEnd) return false
    if (meetingEnd > apptStart && meetingEnd <= apptEnd) return false
  }

  // check against second calendar appointments
  for (const [apptStart, apptEnd] of calTwo) {
    if (meetingStart >= apptStart && meetingStart < apptEnd) return false
    if (meetingEnd > apptStart && meetingEnd <= apptEnd) return false
  }

  return true
}

const args = process.argv.slice(2)
const calendarOne = JSON.parse(args[0])
const availabilityOne = JSON.parse(args[1])
const calendarTwo = JSON.parse(args[2])
const availabilityTwo = JSON.parse(args[3])
const duration = parseInt(args[4])
const result = calendarMatching(
  calendarOne,
  availabilityOne,
  calendarTwo,
  availabilityTwo,
  duration
)
console.log(result)
