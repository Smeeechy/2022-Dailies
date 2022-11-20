/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents 
the coordinate of a point. Check if these points make a straight line in the XY plane.
*/

export const checkStraightLine = (coordinates: number[][]): boolean => {
  const [x1, y1] = coordinates.pop()!
  const [x2, y2] = coordinates.pop()!
  const m = (y2 - y1) / (x2 - x1)
  const b = y1 - m * x1
  // this prompt considers a vertical line to return true which is stupid
  if (Math.abs(m) === Infinity) return coordinates.every(([x]) => x === x1)
  return coordinates.every(([x, y]) => y === m * x + b)
}

const args = process.argv.slice(2)
const coords = JSON.parse(args[0])
const result = checkStraightLine(coords)
console.log(result)
