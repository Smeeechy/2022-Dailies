/*
Given a positive integer n, determine the total number of valid configurations of n queens
on an n x n chessboard where no queen is in direct danger from another.
*/

const nonAttackingQueens = n => {
  const validConfigurations = []
  // initializing an 'empty' n x n board
  let board = new Array(n).fill().map(_ => new Array(n).fill(' '))
  let row = 0
  while (row >= 0 && row < n) {
    // if this row was in progress and we backtracked to it because there were no valid 
    // configurations starting there, move to the next available cell and do it all again
    const startingColumn = board[row].includes('Q') ? board[row].indexOf('Q') + 1 : 0

    if (startingColumn === n) {
      // we've reached the end of this row and must backtrack and check previous row's remaining options
      board[row][startingColumn - 1] = ' '
      row--
      continue
    } else {
      // erase last valid queen if there was one
      if (startingColumn) board[row][startingColumn - 1] = ' '
      // search for new valid spaces on this row starting at the column after the last valid queen
      for (let col = startingColumn; col < n; col++) {
        if (validPlacement(row, col, board)) {
          board[row][col] = 'Q'
          if (row === n - 1) {
            // we've filled the board with n queens and this configuration is valid
            validConfigurations.push(copyBoard(board))
            // reset this last position and try the next 
            board[row][col] = ' '
            col++
          }
        }
      }
    }
    // we weren't able to find a valid space for a queen on this row, so we need to backtrack
    if (!board[row].includes('Q')) row--
    else row++
  }
  return validConfigurations
}

const copyBoard = board => {
  const copy = []
  for (let row = 0; row < board.length; row++) copy[row] = [...board[row]]
  return copy
}

const validPlacement = (row, col, board) => {
  const n = board.length

  // check vertical spaces
  for (let y = 0; y < n; y++) if (board[y][col] === 'Q') return false

  // check horizontal spaces
  for (let x = 0; x < n; x++) if (board[row][x] === 'Q') return false

  // check main diagonal spaces
  // forward
  let fmdy = row + 1
  let fmdx = col + 1
  while (fmdx < n && fmdy < n) if (board[fmdy++][fmdx++] === 'Q') return false
  // backward
  let bmdy = row - 1
  let bmdx = col - 1
  while (bmdx >= 0 && bmdy >= 0) if (board[bmdy--][bmdx--] === 'Q') return false

  // check antidiagonal spaces
  // forward
  let fady = row - 1
  let fadx = col + 1
  while (fadx < n && fady >= 0) if (board[fady--][fadx++] === 'Q') return false
  // backward
  let bady = row + 1
  let badx = col - 1
  while (badx >= 0 && bady < n) if (board[bady++][badx--] === 'Q') return false

  return true
}

const args = process.argv.slice(2)
const n = parseInt(args[0])
const result = nonAttackingQueens(n)
for (const validConfiguration of result) {
  console.log('\n', '='.repeat(n * 2 - 3), '\n')
  for (const row of validConfiguration) console.log(row.map(col => col === ' ' ? '.' : col).join(' '))
}
console.log('\ncount: ' + result.length)