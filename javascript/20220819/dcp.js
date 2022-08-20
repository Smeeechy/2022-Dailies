/*
Given a pattern of only xs and ys and a target string, return an array containing a 
substring for each which when substituted into the pattern result in the target string:

pattern: xyy
string: yomama
result: ['yo', 'ma']

pattern: yyxx
string: hahaheehee
result: ['hee', 'ha']

Returned array should be in the format [x, y].
If no valid substrings exist, return an empty array.
*/

const patternMatcher = (pattern, string) => {
  const normalizedPattern = normalize(pattern)
  const info = getInfo(normalizedPattern)
  let xLen = 1
  let yLen = info.yCount > 0 ?
    (string.length - xLen * info.xCount) / info.yCount :
    0
  while (xLen < string.length) {
    if (yLen === parseInt(yLen)) {
      const x = string.slice(0, xLen)
      const y = yLen > 0 ?
        string.slice(info.yPos * xLen, info.yPos * xLen + yLen) :
        ''
      const result = normalizedPattern
        .split('')
        .map(el => (el === 'x' ? x : y))
        .join('')
      if (result === string) {
        if (pattern.startsWith('x')) return [x, y]
        else return [y, x]
      }
    }
    xLen++
    yLen = info.yCount > 0 ?
      (string.length - xLen * info.xCount) / info.yCount :
      0
  }
  return []
}

const normalize = pattern => {
  if (pattern.startsWith('x')) return pattern
  return pattern
    .split('')
    .map(el => (el === 'x' ? 'y' : 'x'))
    .join('')
}

const getInfo = pattern => {
  const xCount = pattern
    .split('')
    .filter(el => el === 'x')
    .join('').length
  return {
    xCount,
    yCount: pattern.length - xCount,
    yPos: pattern.indexOf('y')
  }
}

const args = process.argv.slice(2)
const pattern = args[0]
const string = args[1]
const result = patternMatcher(pattern, string)
console.log(result)
