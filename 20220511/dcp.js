/*
Given a list of strings, find the longest string chain that can be formed with those strings. A string chain is composed of strings where each successive string is the result of removing exactly one character from the previous string.
*/

// finish this tomorrow

const args = process.argv.slice(2)

const longestStringChain = strings => {
    strings.sort()
    let bestChain = []
    for (let s of strings) {
        let currentChain = [s]
        let validLinks = findValidLinks(s, strings)
        for (let validLink of validLinks) {
            console.log(s, validLink)
        }
        if (currentChain.length > bestChain.length) bestChain = currentChain
    }
    return bestChain.length > 1 ? bestChain : []
}

// finish or completely redo this method
const longestStringChainRecursive = (chain, strings) => {
    const current = chain[chain.length - 1]
    const validLinks = findValidLinks(current, strings)
    let bestChain = [...chain]
    for (const validLink of validLinks) {
        let newChain = [...chain, validLink]
    }
}

const findValidLinks = (s, strings) => {
    let valid = []
    for (let i = 0; i < s.length; i++) {
        let newS = norm(s).split('')
        newS.splice(i, 1)
        newS = newS.join('')
        if (strings.includes(newS)) valid.push(newS)
    }
    return valid
}

const norm = s => {
    return s.split('').sort().join('')
}

const result = longestStringChain(args)
console.log(result)
