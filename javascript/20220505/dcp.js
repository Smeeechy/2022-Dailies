/*
Implement the function embolden(s, lst) which takes in a string s and list of substrings lst, and wraps all substrings in s with an HTML bold tag <b> and </b>.

If two bold tags overlap or are contiguous, they should be merged.

For example, given s = abcdefg and lst = ["bc", "ef"], return the string a<b>bc</b>d<b>ef</b>g.

Given s = abcdefg and lst = ["bcd", "def"], return the string a<b>bcdef</b>g, since they overlap.
*/

const args = process.argv.slice(2)

let s = args[0]
const list = args.slice(1)

// find start and end indices of all matching substrings within s
let toWrap = []
for (const index in list) {
    const length = list[index].length
    for (let j = 0; j + length < s.length; j++) {
        const substr = s.split('').slice(j, j + length).join('')
        if (substr == list[index]) toWrap.push([j, j + length])
    }
}

// merge overlapping index pairs
for (let i = 0; i + 1 < toWrap.length; i++) {
    if (toWrap[i + 1][0] - toWrap[i][1] <= 1) {
        toWrap.splice(i, 2, [toWrap[i][0], toWrap[i + 1][1]])
        i--
    }
}

// insert <b> tags into s at each remaining index pair
console.log(s)
let offset = 0
toWrap.forEach(indexPair => {
    const substr = s.split('').slice(indexPair[0] + offset, indexPair[1] + offset).join('')
    s = s.replaceAll(substr, '<b>' + substr + '</b>')
    offset += 7 // to account for seven new characters on next iteration
})

console.log(s)