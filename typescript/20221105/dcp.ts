/*
Given a string path, return its simplified canonical path.
ie  '/home//desktop/../documents/./' ===> '/home/documents'
*/

export const simplifyPath = (path: string): string => {
  const stack: string[] = []
  const files = path.split(/\/+/)
  for (const file of files) {
    if (file === '..' && stack.length > 0) {
      stack.pop()
      continue
    }
    if (file.length === 0 || file === '.' || file === '..') continue
    stack.push(file)
  }
  return '/' + stack.join('/')
}

const args = process.argv.slice(2)
const result = simplifyPath(args[0])
console.log(result)
