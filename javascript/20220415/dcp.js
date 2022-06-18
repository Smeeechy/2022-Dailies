/*
A knight is placed on a given square on an 8 x 8 chessboard. It is then moved randomly several times, where each move 
is a standard knight move. If the knight jumps off the board at any point, however, it is not allowed to jump back on.

After k moves, what is the probability that the knight remains on the board?
*/

class Knight {
    constructor(xpos, ypos) {
        this.xpos = xpos
        this.ypos = ypos
        this.moveCount = 0
    }

    move() {
        if (!this.onBoard) return
        let horizontal
        if (Math.random() >= .5) {
            horizontal = true
        } else {
            horizontal = false
        }
        if (horizontal) {
            if (Math.random() >= .5) {
                this.xpos += 2
                if (Math.random() >= .5) {
                    this.ypos += 1
                } else {
                    this.ypos -= 1
                }
            } else {
                this.xpos -= 2
                if (Math.random() >= .5) {
                    this.ypos += 1
                } else {
                    this.ypos -= 1
                }
            }
        } else {
            if (Math.random() >= .5) {
                this.ypos += 2
                if (Math.random() >= .5) {
                    this.xpos += 1
                } else {
                    this.xpos -= 1
                }
            } else {
                this.ypos -= 2
                if (Math.random() >= .5) {
                    this.xpos += 1
                } else {
                    this.xpos -= 1
                }
            }
        }
        this.moveCount += 1
        // console.log('move #' + this.moveCount + ': (' + this.xpos + ', ' + this.ypos + ')')
    }

    get onBoard() {
        return (this.xpos >= 0 && this.ypos >= 0 && this.xpos < 8 && this.ypos < 8)
    }
}

const args = process.argv.slice(2)
const x = parseInt(args[0])
const y = parseInt(args[1])
const k = parseInt(args[2])

let lost = 0
for (let iter = 0; iter < 1000000; iter++) {
    const knight = new Knight(x, y)
    for (let i = 0; i < k; i++) {
        knight.move()
        if (!knight.onBoard) {
            lost += 1
            break
        }
    }
}
console.log('knights lost: ' + lost)
console.log('% loss: ' + (lost / 1000000 * 100))
