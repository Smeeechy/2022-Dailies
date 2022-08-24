/*
Given a string and a substring, return the string with every instance of the substring wrapped in underscores.
If instances of the substring overlap or touch, they should be consolidated:
This test is a testtest testestest ===> This _test_ is a _testtest_ _testestest_
*/

String.prototype.insertUnderscore = function (index) {
  const temp = this.split('')
  temp.splice(index, 0, '_')
  return temp.join('')
}

String.prototype.insertUnderscores = function (indices) {
  let temp = this.toString()
  let offset = 0
  for (const [start, end] of indices) {
    temp = temp.insertUnderscore(start + offset++).insertUnderscore(end + offset++)
  }
  return temp
}

const underscorify = (string, substring) => {
  return string.insertUnderscores(consolidate(findIndices(string, substring)))
}

const findIndices = (string, substring) => {
  const indices = []
  for (let i = 0; i < string.length; i++) {
    string.slice(i).startsWith(substring) && indices.push([i, i + substring.length])
  }
  return indices
}

const consolidate = pairs => {
  const consolidated = []
  for (const [start, end] of pairs) {
    if (consolidated.length === 0) consolidated.push([start, end])
    else {
      const [lastStart, lastEnd] = consolidated.pop()
      if (start <= lastEnd) consolidated.push([lastStart, end])
      else consolidated.push([lastStart, lastEnd], [start, end])
    }
  }
  return consolidated
}

const args = process.argv.slice(2)
const string = args[0]
const substring = args[1]
const result = underscorify(string, substring)
console.log(result)
