/*
An image smoother is a filter of the size 3 x 3 that can be applied to each cell of 
an image by rounding down the average of the cell and the eight surrounding cells 
(i.e., the average of the nine cells in the blue smoother). If one or more of the 
surrounding cells of a cell is not present, we do not consider it in the average.
*/

export const imageSmoother = (img: number[][]): number[][] => {
  const result: number[][] = []
  for (let row = 0; row < img.length; row++) {
    result.push([])
    for (let col = 0; col < img[row].length; col++) {
      const group = getCellGroup(row, col, img)
      result[row][col] = Math.floor(group.reduce((acc, next) => acc + next, 0) / group.length)
    }
  }
  return result
}

const getCellGroup = (row: number, col: number, img: number[][]): number[] => {
  const cells: number[] = []
  for (let rowOffset = -1; rowOffset < 2; rowOffset++) {
    if (row + rowOffset < 0 || row + rowOffset >= img.length) continue
    for (let colOffset = -1; colOffset < 2; colOffset++) {
      if (col + colOffset < 0 || col + colOffset >= img[row].length) continue
      cells.push(img[row + rowOffset][col + colOffset])
    }
  }
  return cells
}

const args = process.argv.slice(2)
const img = JSON.parse(args[0])
const result = imageSmoother(img)
console.log(result)
