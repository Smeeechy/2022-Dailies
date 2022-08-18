/*
Given a target number of divs, generate all valid combinations of opening and closing div tags that result in the target div count.
*/

const generateDivTags = count => {
  let combos = ['<div>']
  while (true) {
    const updatedCombos = []
    for (const combo of combos) {
      const info = getInfo(combo)
      if (info.isOpen) {
        if (info.openCount < count)
          updatedCombos.push(combo + '<div>', combo + '</div>')
        else updatedCombos.push(combo + '</div>')
      } else {
        if (info.closeCount === count) return combos
        else updatedCombos.push(combo + '<div>')
      }
    }
    combos = updatedCombos
  }
}

const getInfo = s => {
  let openCount = 0
  let closeCount = 0
  let startLength = s.length
  while (true) {
    s = s.replace('<div></div>', '')
    if (s.length === startLength) {
      while (s.length > 0) {
        s = s.replace('<div>', '')
        openCount++
      }
      break
    } else {
      startLength = s.length
      openCount++
      closeCount++
    }
  }
  return { isOpen: openCount !== closeCount, openCount, closeCount }
}

const args = process.argv.slice(2)
const count = parseInt(args[0])
const result = generateDivTags(count)
console.log(result)