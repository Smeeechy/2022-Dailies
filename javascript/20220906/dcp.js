/*
Given a list of cartesian coordinates, find every rectangle that can be made out of those points.
For this problem, only consider rectangles whose sides are parallel with the axes of the plane.
*/

const rectangleMania = coords => {
  const neighborMap = getNeighborMap(coords)
  let rectangleCount = 0
  for (let coord of coords) rectangleCount += findRectanglesFromOrigin(coord, neighborMap)
  return rectangleCount
}

// finds all rectangles that can be created from each point as the bottom-left origin
const findRectanglesFromOrigin = (origin, neighborMap) => {
  let rectangleCount = 0
  const validUps = neighborMap[origin].ups
  const validRights = []
  const validDowns = []
  const validLefts = []
  for (let validUp of validUps) validRights.push(...neighborMap[validUp].rights)
  for (let validRight of validRights) validDowns.push(...neighborMap[validRight].downs)
  for (let validDown of validDowns) validLefts.push(...neighborMap[validDown].lefts)
  for (let validLeft of validLefts) if (validLeft === origin) rectangleCount++
  return rectangleCount
}

// creates a map from each individual coordinate pair to their direct neighbors
// in each direction (for use in above findRectanglesFromOrigin method)
const getNeighborMap = coords => {
  let neighborMap = {}
  for (let coord of coords) {
    const [x, y] = coord
    const ups = coords.filter(([otherX, otherY]) => otherX === x && otherY > y)
    const rights = coords.filter(([otherX, otherY]) => otherX > x && otherY === y)
    const downs = coords.filter(([otherX, otherY]) => otherX === x && otherY < y)
    const lefts = coords.filter(([otherX, otherY]) => otherX < x && otherY === y)
    neighborMap[coord] = { ups, rights, downs, lefts }
  }
  return neighborMap
}

const args = process.argv.slice(2)
const coords = JSON.parse(args[0])
const result = rectangleMania(coords)
console.log(result)
