/*
given an unsorted list of integers representing query durations in seconds, find the minimum waiting time for all queries to begin execution.
*/

const minimumWaitingTime = queries => {
    return queries.sort((a, b) => a - b).map((query, index) => {
        let subtotal = 0
        for (let i = 0; i < index; i++) subtotal += queries[i]
        return subtotal
    }).reduce((acc, next) => acc += next, 0)
}

const args = process.argv.slice(2)
const queryDurations = args.map(Number)
const result = minimumWaitingTime(queryDurations)
console.log(result)
