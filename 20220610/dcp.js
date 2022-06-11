/*
write a basic testing framework with the following functions: 

describe(suiteName, func) - func parameter should contain one or more calls to it

it(caseName, func) - func parameter should contain one or more calls to expect

expect(actual) - should return an object with the following methods that throw errors on falsey results:
    toExist() - checks if actual is not null or undefined
    toBe(expected) - checks if actual is strictly equal to expected
    toBeType(type) - checks if actual is of the given type

the errors thrown by the expect() functions should be rethrown by the encompassing it(), which should be printed to the console by the encompassing describe()


original prompt found at https://www.algoexpert.io/frontend/coding-questions/testing-framework
*/

const describe = (testSuiteName, func) => {
    console.log(`beginning test suite ${testSuiteName}`)
    try {
        func()
        console.log(`successfully completed test suite ${testSuiteName}`)
    } catch (error) {
        console.error(`failed running test suite ${testSuiteName} on test case ${error.message} with error message ${error.cause}`)
    }
}

const it = (testCaseName, func) => {
    console.log(`beginning test case ${testCaseName}`)
    try {
        func()
        console.log(`successfully completed test case ${testCaseName}`)
    } catch (error) {
        throw new Error(testCaseName, { cause: error.message })
    }
}

const expect = actual => {
    return {
        toExist: () => {
            if (actual == null || actual == undefined) {
                throw new Error(`expected value to exist but got ${JSON.stringify(actual)}`)
            }
        },
        toBe: expected => {
            if (actual !== expected) {
                throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`)
            }
        },
        toBeType: type => {
            if (typeof actual !== type) {
                throw new Error(`expected ${JSON.stringify(actual)} to be of type ${type} but got ${typeof actual}`)
            }
        }
    }
}

// tests
describe(1, () => {
    it(1, () => {
        expect(true).toExist()
        expect(true).toBe(true)
        expect(true).toBeType('boolean')
    })

    it(2, () => {
        expect(1).toExist()
        expect(2 + 2).toBe(4)
    })

    it(3, () => {
        expect('foo').toBeType('string')
        expect({}).toBeType('object')
    })
})

describe('supposed to fail', () => {
    it('works', () => {
        expect(0).toBe(0)
    })

    it('doomed', () => {
        expect(true).toBe(false)
    })

    it('unreachable', () => {
        expect(null).toBeType(null)
    })
})