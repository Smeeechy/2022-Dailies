/*
Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the 
list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

2
1.5
2
3.5
2
2
2
*/

const args = process.argv.slice(2).map(Number);
let list = [];

for (let i = 0; i < args.length; i++) {
    list.push(args[i]);
    console.log(median(list));
}

function median(numlist) {
    let nums = [...numlist];
    const len = nums.length;
    nums.sort();
    if (len % 2 === 0) return (nums[len / 2] + nums[(len / 2) - 1]) / 2;
    else return nums[(nums.length - 1) / 2];
}
