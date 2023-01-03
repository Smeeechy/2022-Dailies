/*
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue 
to buy from you and order one at a time (in the order specified by bills). Each 
customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. 
You must provide the correct change to each customer so that the net transaction 
is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, 
return true if you can provide every customer with the correct change, or false 
otherwise.
*/

export const lemonadeChange = (bills: number[]): boolean => {
  let change: { [key: number]: number } = { 5: 0, 10: 0, 20: 0 }
  for (const bill of bills) {
    change[bill]++
    if (bill > 5) {
      if (bill === 10 && change[5]-- === 0) return false
      if (bill === 20) {
        if (change[10] >= 1 && change[5] >= 1) {
          change[10]--
          change[5]--
        } else if (change[5] >= 3) {
          change[5] -= 3
        } else {
          return false
        }
      }
    }
  }
  return true
}

const args = process.argv.slice(2)
const bills = args.map(Number)
const result = lemonadeChange(bills)
console.log(result)
