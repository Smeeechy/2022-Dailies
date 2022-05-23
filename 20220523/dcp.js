/*
Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:

record(timestamp): records a hit that happened at timestamp
total(): returns the total number of hits recorded
range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)
*/

class HitCounter {
    constructor() {
        this.hits = []
    }

    record(timestamp) {
        this.hits.push(timestamp)
    }

    total() {
        return this.hits.length
    }

    range(lower, upper) {
        return this.hits.filter(hit => hit >= lower && hit <= upper).length
    }
}

const demo = async () => {
    const sleep = ms => new Promise(res => setTimeout(res, ms))
    const test = new HitCounter()
    console.log(test.total())
    test.record(Date.now())
    await sleep(1000)
    console.log(test.total())
    const startTime = Date.now()
    test.record(Date.now())
    await sleep(250)
    test.record(Date.now())
    await sleep(500)
    test.record(Date.now())
    await sleep(750)
    const endTime = Date.now()
    await sleep(1000)
    test.record(Date.now())
    console.log(test.total())
    console.log(test.range(startTime, endTime))
    console.log(test.hits)
}

demo()