/*
implement the knuth-morris-pratt string matching algorithm
*/

const args = process.argv.slice(2)

const knuthMorrisPratt = (string, substring) => {
    const patternMap = getPatternMap(substring)
    let i = -1
    let j = 0
    while (++i < string.length) {
        if (string[i] === substring[j]) {
            if (++j === substring.length) return true
        } else {
            if (j > 0) j = patternMap[--j] + 1
            if (string[i] !== substring[j++]) j = 0
        }
    }
    return false
}

const getPatternMap = string => {
    let pattern = Array(string.length).fill(-1)
    let i = 0
    let j = 0
    while (++i < string.length) {
        if (string[i] === string[j]) pattern[i] = j++
        else if (j > 0) {
            j = pattern[--j] + 1
            if (string[i] === string[j]) pattern[i] = j++
            else j = 0
        }
    }
    return pattern
}

const string = args[0]
const substring = args[1]
const result = knuthMorrisPratt(string, substring)
console.log(result)