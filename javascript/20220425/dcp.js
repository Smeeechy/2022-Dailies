/*
Soundex is an algorithm used to categorize phonetically, such that two names that sound alike but are spelled 
differently have the same representation.

Soundex maps every name to a string consisting of one letter and three numbers, like M460.

One version of the algorithm is as follows:

Remove consecutive consonants with the same sound (for example, change ck -> c).
Keep the first letter. The remaining steps only apply to the rest of the string.
Remove all vowels, including y, w, and h.
Replace all consonants with the following digits:
b, f, p, v → 1
c, g, j, k, q, s, x, z → 2
d, t → 3
l → 4
m, n → 5
r → 6
If you don't have three numbers yet, append zeros until you do. Keep the first three numbers.
Using this scheme, Jackson and Jaxen both map to J250.

Implement Soundex.
*/

const args = process.argv.slice(2)
let word = [...args[0].toLowerCase()]

const map = {
    1: [...'bfpv'],
    2: [...'cgjkqsxz'],
    3: [...'dt'],
    4: [...'l'],
    5: [...'mn'],
    6: [...'r']
}

// remove consecutive consonants with the same sound
for (let i = 0; i + 1 < word.length; i++) {
    // if word[i] and word[i + 1] are both in the same map entry, condense them
    for (const key in map) {
        if (map[key].includes(word[i]) && map[key].includes(word[i + 1])) {
            word.splice(i--, 1)
        }
    }
}

// keep the first letter
const firstLetter = word.splice(0, 1)

// remove all vowels + y, w, and h
const vowelsEtAl = [...'aeiouywh']
for (let i = 0; i < word.length; i++) {
    if (vowelsEtAl.includes(word[i])) word.splice(i--, 1)
}

// replace all consonants with their mapped digits
let result = [firstLetter]
word.forEach(letter => {
    for (const key in map) {
        if (map[key].includes(letter)) {
            result.push(key)
            break
        }
    }
})

// add padding zeros to three digis
while (result.length < 4) {
    result.push(0)
}

// trim down to size and format
result = result.slice(0, 4).join('').toUpperCase()

// print the result
console.log(result)