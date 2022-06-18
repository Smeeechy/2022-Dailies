/*
You're given two arrays of integers of equal length. One represents the biking speeds of people wearing blue shirts, the other for those of red shirts.

Each rider should be paired with another wearing a different color shirt. They will be riding tandem bikes, and the fastest of the pair determines their biking speed.

If 'fastest' is true, find a way to make pairs to make the largest sum of total pair speeds. Otherwise, find the smallest sum.
*/

const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
    const reds = redShirtSpeeds.sort((a, b) => a - b)
    const blues = blueShirtSpeeds.sort((a, b) => a - b)
    if (fastest) {
        return reds
            .map((_, index) => Math.max(reds[index], blues[reds.length - 1 - index]))
            .reduce((acc, next) => acc += next, 0)
    } else {
        return reds
            .map((_, index) => Math.max(reds[index], blues[index]))
            .reduce((acc, next) => acc += next, 0)
    }
}

const args = process.argv.slice(2)
const reds = JSON.parse(args[0])
const blues = JSON.parse(args[1])
const fastest = args[2] != null
const result = tandemBicycle(reds, blues, fastest)
console.log(result)