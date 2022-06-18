/*
Given an array of strings, group anagrams together.

For example, given the following array:

['eat', 'ate', 'apt', 'pat', 'tea', 'now']
Return:

[['eat', 'ate', 'tea'],
 ['apt', 'pat'],
 ['now']]
*/

const args = process.argv.slice(2)
const groups = groupAnagrams(args)
console.log(groups)

function groupAnagrams(words) {
    const alphabetize = str => [...str].sort().join('')
    let groups = []
    for (const word of words) {
        let inserted = false
        for (let group of groups) {
            if (alphabetize(group[0]) == alphabetize(word)) {
                group.push(word)
                inserted = true
                break
            }
        }
        if (!inserted) groups.push([word])
    }
    return groups
}