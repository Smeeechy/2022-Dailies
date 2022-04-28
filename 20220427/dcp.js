/*
A teacher must divide a class of students into two teams to play dodgeball. Unfortunately, not all the kids get along, and several refuse to be put on the same team as that of their enemies.

Given an adjacency list of students and their enemies, write an algorithm that finds a satisfactory pair of teams, or returns False if none exists.

For example, given the following enemy graph you should return the teams {0, 1, 4, 5} and {2, 3}.

students = {
    0: [3],
    1: [2],
    2: [1, 4],
    3: [0, 4, 5],
    4: [2, 3],
    5: [3]
}
On the other hand, given the input below, you should return False.

students = {
    0: [3],
    1: [2],
    2: [1, 3, 4],
    3: [0, 2, 4, 5],
    4: [2, 3],
    5: [3]
}
*/

const args = process.argv.slice(2)
const dict = JSON.parse(args[0])
let sorted = []
for (let i in dict) {
    sorted.push([parseInt(i), dict[i]])
}
sorted.sort((a, b) => b[1].length - a[1].length)

let possible = true
let team1 = []
let team2 = []
for (const kid of sorted) {
    // if the current student has enemies in team1, try team 2
    for (const enemy of kid[1]) {
        if (team1.includes(enemy)) {
            // if they also have enemies in team2, return false
            for (const diffEnemy of kid[1]) {
                if (team2.includes(diffEnemy)) {
                    possible = false
                    break
                }
            }
            team2.push(kid[0])
            break
        } else {
            team1.push(kid[0])
            break
        }
    }
}

if (possible) {
    console.log(team1, team2)
} else {
    console.log('not possible')
}