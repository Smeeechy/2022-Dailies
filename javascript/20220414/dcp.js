/*
Implement regular expression matching with the following special characters:

. (period) which matches any single character
* (asterisk) which matches zero or more of the preceding element
That is, implement a function that takes in a string and a valid regular expression and returns whether or not the string 
matches the regular expression.

For example, given the regular expression "ra." and the string "ray", your function should return true. The same regular 
expression on the string "raymond" should return false.

Given the regular expression ".*at" and the string "chat", your function should return true. The same regular expression 
on the string "chats" should return false.
*/

const args = process.argv.slice(2)
const regex = args[0]
const str = args[1]

for (let i = 0; i < str.length; i++) {
    const re = regex[i]
    if (re != str[i]) {
        if (re == '.') {
            continue
        } else if (re == '*') {
            const prev = regex[i - 1]
            while (str[i] == prev) i++
            console.log(prev)
        } else {
            console.log('broke at index ' + i)
            break
        }
    }
}
