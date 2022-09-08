/*
Given a mapping of blocks to amenities and a list of required amenities, find the block 
that minimizes the maximum distance needed to travel to reach all required amenities.
*/

const apartmentHunting = (blocks, reqs) => {
  const distances = []
  for (let i = 0; i < blocks.length; i++) {
    let maxDistance = -Infinity
    for (let req of reqs) {
      let distance = Infinity
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          if (Math.abs(j - i) < distance) distance = Math.abs(j - i)
        }
      }
      if (distance > maxDistance) maxDistance = distance
    }
    distances[i] = maxDistance
  }
  return distances.indexOf(Math.min(...distances))
}

const args = process.argv.slice(2)
const blocks = JSON.parse(args[0])
const reqs = JSON.parse(args[1])
const result = apartmentHunting(blocks, reqs)
console.log(result)
