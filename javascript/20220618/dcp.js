/*
Given an array of pairs of start and end times for laptop rentals, determine the minimum number of laptops the school needs to rent to provide for every student.
*/

const laptopRentals = times => {
    const starts = []
    const ends = []
    times.forEach(time => {
        starts.push(time[0])
        ends.push(time[1])
    })
    starts.sort((a, b) => a - b)
    ends.sort((a, b) => a - b)
    let startIndex = 0
    let endIndex = 0
    let rentals = 0
    while (startIndex < starts.length) {
        if (starts[startIndex] < ends[endIndex]) {
            rentals++
            startIndex++
        } else {
            startIndex++
            endIndex++
        }
    }
    return rentals
}

const args = process.argv.slice(2)
const times = JSON.parse(args[0])
const result = laptopRentals(times)
console.log(result)