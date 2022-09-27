/*
Given a list of items consisting of their values and weights, and a knapsack capacity, 
find the list of items with the maximum value that can be fit into the knapsack.
*/

export const knapsackProblem = (items: number[][], capacity: number): [number, number[]] => {
  // instantiating table for dynamic algorithm
  const table = new Array(items.length + 1).fill(0).map(_ => new Array(capacity + 1).fill(0))

  // iterate through each item
  for (let row = 1; row < table.length; row++) {
    const [value, weight] = items[row - 1]
    // iterate through each knapsack capacity
    for (let col = 1; col < table[row].length; col++) {
      let availableCapacity = col
      let currentValue = 0
      // if the item is small enough for the current capacity, put it in the knapsack
      if (weight <= availableCapacity) {
        currentValue += value
        availableCapacity -= weight
        // add the maximum value of the remaining capacity
        if (availableCapacity > 0) currentValue += table[row - 1][availableCapacity]
      }
      // set the maximum value at this item and capacity to the max between adding the current
      // item and leaving it out (using the max value of this capacity with the previous item)
      table[row][col] = Math.max(currentValue, table[row - 1][col])
    }
  }

  // work backwards from the last table entry to find item indices
  let currentRow = table.length - 1
  let currentCol = table[0].length - 1
  const maxValue = table[currentRow][currentCol]
  const itemIndices: number[] = []
  while (currentRow > 0) {
    while (currentRow > 0 && table[currentRow][currentCol] === table[currentRow - 1][currentCol]) currentRow--
    if (currentRow !== 0 && currentCol !== 0 && table[currentRow][currentCol] !== 0) {
      itemIndices.unshift(currentRow - 1)
      currentCol -= items[--currentRow][1]
    }
  }

  return [maxValue, itemIndices]
}

const args = process.argv.slice(2)
const items = JSON.parse(args[0])
const capacity = parseInt(args[1])
const result = knapsackProblem(items, capacity)
console.log(result)
