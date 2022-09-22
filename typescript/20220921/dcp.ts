/*
Given a list of coordinates, find the minimum rectangular area that can be made with those points.
For this problem, only consider rectangles with sides parallel to the grid axes.
If no rectangles can be created, return 0.
*/

export const minimumAreaRectangle = (points: number[][]): number => {
  if (points.length === 0) return 0
  // sort points by their x values
  points.sort(([aX], [bX]) => aX - bX)
  const lines: number[][][] = []
  const minX = points[0][0]
  const maxX = points[points.length - 1][0]
  for (let x = minX; x <= maxX; x++) {
    // get all points at the same x value
    const pointsAtX = points.filter(([pointX]) => pointX === x)
    // find all combination pairs of these points
    for (let i = 0; i < pointsAtX.length; i++) {
      for (let j = i + 1; j < pointsAtX.length; j++) {
        const iPoint = pointsAtX[i]
        const jPoint = pointsAtX[j]
        // sort so point with lower y value is always first
        const line = [iPoint, jPoint].sort(([, aY], [, bY]) => aY - bY)
        lines.push(line)
      }
    }
  }

  let minArea = Infinity
  // pair all lines into rectangles and check areas against current minimum
  // note that line pairs that don't result in rectangles have infinite area
  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      const area = rectangleArea(lines[i], lines[j])
      minArea = Math.min(minArea, area)
    }
  }

  return minArea === Infinity ? 0 : minArea
}

const rectangleArea = (line1: number[][], line2: number[][]): number => {
  // destructure each line to its individual points
  // we're ignoring the second x value because it will always be redundant
  const [[x1, y1min], [, y1max]] = line1
  const [[x2, y2min], [, y2max]] = line2
  // if a rectangle can be made, return its area
  if (y1min === y2min && y1max === y2max) return (y1max - y1min) * (x2 - x1)
  return Infinity
}

const args = process.argv.slice(2)
const points = JSON.parse(args[0])
const result = minimumAreaRectangle(points)
console.log(result)
