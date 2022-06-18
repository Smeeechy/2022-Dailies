/*
Write a function that returns the bitwise AND of all integers between M and N, inclusive.
*/

const args = process.argv.slice(2);
const m = parseInt(args[0]);
const n = parseInt(args[1]);

let result = m;
for (let i = m; i <= n; i++) {
    result = result & i;
}

console.log(result);
