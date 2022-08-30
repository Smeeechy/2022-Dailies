/*
Given an array of integer triplets representing the width, depth, and height of a disk, 
*/

class Disk {
  constructor(width, depth, height) {
    this.width = width
    this.depth = depth
    this.height = height
  }

  isSmallerThan(disk) {
    return (
      this.width < disk.width &&
      this.depth < disk.depth &&
      this.height < disk.height
    )
  }
}

const diskStacking = disks => {
  disks = disks
    .map(disk => new Disk(...disk))
    .sort((a, b) => a.height - b.height)
  const [bestHeights, nextTallestIndices] = getDiskInfo(disks)
  return compileResult(disks, bestHeights, nextTallestIndices)
}

const getDiskInfo = disks => {
  const bestHeights = disks.map(disk => disk.height)
  const nextTallestIndices = new Array(disks.length)
  for (let i = 1; i < disks.length; i++) {
    const current = disks[i]
    for (let j = 0; j < i; j++) {
      const otherIsSmaller = disks[j].isSmallerThan(current)
      if (otherIsSmaller && bestHeights[j] + current.height > bestHeights[i]) {
        bestHeights[i] = bestHeights[j] + current.height
        nextTallestIndices[i] = j
      }
    }
  }
  return [bestHeights, nextTallestIndices]
}

const compileResult = (disks, bestHeights, nextTallestIndices) => {
  const result = []
  const maxHeight = Math.max(...bestHeights)
  let nextTallestIndex = bestHeights.indexOf(maxHeight)
  while (!isNaN(nextTallestIndex)) {
    result.push(disks[nextTallestIndex])
    nextTallestIndex = nextTallestIndices[nextTallestIndex]
  }
  return result
    .sort((a, b) => a.height - b.height)
    .map(disk => Object.values(disk))
}

const args = process.argv.slice(2)
const disks = JSON.parse(args[0])
const result = diskStacking(disks)
console.log(result)
