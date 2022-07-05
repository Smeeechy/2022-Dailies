/*
Given two equal-length integer arrays of student heights (one for blue shirts and the other for red shirts) find out if there exists an arrangement of students where:
1. All shirt colors are on the same row
2. All studens in the back row are strictly taller than the student in front of them
*/

const classPhotos = (redShirtHeights, blueShirtHeights) => {
    const reds = redShirtHeights.sort((a, b) => a - b)
    const blues = blueShirtHeights.sort((a, b) => a - b)
    const pairs = reds.map((red, index) => [red, blues[index]])
    if (reds[0] > blues[0]) {
        for (let pair of pairs) {
            if (pair[1] >= pair[0]) return false
        }
        return true
    } else if (reds[0] < blues[0]) {
        for (let pair of pairs) {
            if (pair[0] >= pair[1]) return false
        }
        return true
    } else return false
}

const args = process.argv.slice(2)
const reds = JSON.parse(args[0])
const blues = JSON.parse(args[1])
const result = classPhotos(reds, blues)
console.log(result)