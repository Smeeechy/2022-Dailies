/*
Given an integer n, create and return a matrix starting with 1 in the top left and spiraling inwards to n^2:

n = 3
[[1, 2, 3]
 [8, 9, 4]
 [7, 6, 5]]

n = 4
[[ 1,  2,  3, 4]
 [12, 13, 14, 5]
 [11, 16, 15, 6]
 [10,  9,  8, 7]]
*/

enum Direction {
  Right,
  Down,
  Left,
  Up
}

const rotate = (direction: Direction): Direction => {
  switch (direction) {
    case Direction.Right:
      return Direction.Down
    case Direction.Down:
      return Direction.Left
    case Direction.Left:
      return Direction.Up
    case Direction.Up:
      return Direction.Right
  }
}

const next = (x: number, y: number, direction: Direction, matrix: number[][]): number[] | null => {
  switch (direction) {
    case Direction.Right:
      if (x + 1 < matrix.length && !matrix[y][x + 1]) return [x + 1, y]
      else return null
    case Direction.Down:
      if (y + 1 < matrix.length && !matrix[y + 1][x]) return [x, y + 1]
      else return null
    case Direction.Left:
      if (x - 1 >= 0 && !matrix[y][x - 1]) return [x - 1, y]
      else return null
    case Direction.Up:
      if (y - 1 >= 0 && !matrix[y - 1][x]) return [x, y - 1]
      else return null
  }
}

const generateMatrix = (n: number): number[][] => {
  const matrix: number[][] = new Array(n).fill(null).map(_ => new Array(n))
  let [x, y] = [0, 0]
  let num = 1
  matrix[y][x] = num++
  let direction = Direction.Right
  while (true) {
    if (!next(x, y, direction, matrix)) {
      direction = rotate(direction)
      if (!next(x, y, direction, matrix)) return matrix
    } else {
      ;[x, y] = next(x, y, direction, matrix) as number[]
      matrix[y][x] = num++
    }
  }
}

const args = process.argv.slice(2)
const n = parseInt(args[0])
const matrix = generateMatrix(n)
console.table(matrix)
