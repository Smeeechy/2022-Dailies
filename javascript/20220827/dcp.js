/*

*/

const interweavingStrings = (one, two, three) => {
  let i = 0
  let j = 0
  for (let k in three) {
    const char = three[k]
    if (one[i] === char && two[j] === char) {
      const assumingOne = [one.slice(i + 1), two.slice(j), three.slice(+k + 1)]
      const assumingTwo = [one.slice(i), two.slice(j + 1), three.slice(+k + 1)]
      return (
        interweavingStrings(...assumingOne) ||
        interweavingStrings(...assumingTwo)
      )
    } else if (one[i] === char) i++
    else if (two[j] === char) j++
    else return false
  }
  return i === one.length && j === two.length
}

const args = process.argv.slice(2)
const result = interweavingStrings(...args)
console.log(result)
