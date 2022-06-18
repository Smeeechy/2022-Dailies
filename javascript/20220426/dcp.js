/*
We have some historical clickstream data gathered from our site anonymously using cookies. The histories contain URLs that users have visited in chronological order.

Write a function that takes two users' browsing histories as input and returns the longest contiguous sequence of URLs that appear in both.

For example, given the following two users' histories:

user1 = ['/home', '/register', '/login', '/user', '/one', '/two']
user2 = ['/home', '/red', '/login', '/user', '/one', '/pink']
You should return the following:

['/login', '/user', '/one']
*/

// sample command line input:
// rjs '{"user1": ["/home", "/register", "/login", "/user", "/one", "/two"], "user2": ["/home", "/red", "/login", "/user", "/one", "/pink"]}'

const args = process.argv.slice(2)
const json = JSON.parse(args[0])

const result = longestSimilarHistory(json.user1, json.user2)
console.log(result)

function longestSimilarHistory(history1, history2) {
    let lsh = {length: 0, startIndex: -1} // start index is for history1 only
    for (let i = 0; i < history1.length; i++) {
        for (let j = 0; j < history2.length; j++) {
            let count = 0
            while (history1[i + count] == history2[j + count]) count++
            if (count > lsh.length) {
                lsh.length = count
                lsh.startIndex = i
            }
        }
    }
    return history1.slice(lsh.startIndex, lsh.startIndex + lsh.length)
}