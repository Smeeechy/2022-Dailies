/*
You have a car that can drive some number of miles per gallon of fuel, and
your goal is to pick a starting city such that you can fill up your car with
that city's fuel, drive to the next city, refill up your car with that city's
fuel, drive to the next city, and so on and so forth until you return back to
the starting city with 0 or more gallons of fuel left.

Given an array for distances between cities, another array for available fuel in each city, and an integer MPG, find a valid starting city.
*/

const args = process.argv.slice(2)

const validStartingCity = (distances, fuel, mpg) => {
    let valid
    let startingCity = 0
    while (valid == undefined) {
        let currentFuel = 0
        for (let i = 0; i <= distances.length; i++) {
            if (i == distances.length) {
                valid = startingCity
                break
            }
            let index = (i + startingCity) % distances.length
            currentFuel += fuel[index]
            if (distances[index] > currentFuel * mpg) break
            else currentFuel = Math.round((currentFuel - distances[index] / mpg) * 1000000) / 1000000
        }
        startingCity++
    }
    return valid ?? -1
}

const distances = JSON.parse(args[0])
const fuel = JSON.parse(args[1])
const mpg = parseInt(args[2])
console.log(validStartingCity(distances, fuel, mpg))