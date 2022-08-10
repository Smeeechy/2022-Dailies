/*
Given a string filepath, return the shortest possible equivalent filepath.
*/

const shortenPath = path => {
  const result = []
  const tokens = path.split(/\//g)
  for (let token of tokens) {
    if (token === '' || token === '.') continue
    if (token === '..') {
      if (result.length > 0 && result[result.length - 1] !== '..') result.pop()
      else if (!path.startsWith('/')) result.push(token)
      else continue
    } else result.push(token)
  }
  return (path.startsWith('/') ? '/' : '') + result.join('/')
}

const args = process.argv.slice(2)
const path = args[0]
const result = shortenPath(path)
console.log(result)