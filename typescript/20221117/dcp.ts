/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, 
the latest version of your product fails the quality check. Since each version is developed based 
on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which 
causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement 
a function to find the first bad version. You should minimize the number of calls to the API.
*/

// this weird higher-order structure is given by the prompt
const solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 0
    let right = n
    let middle = Math.ceil(n / 2)
    while (left < right) {
      middle = Math.ceil((left + right) / 2)
      if (isBadVersion(middle)) {
        if (!isBadVersion(middle - 1)) return middle
        else right = middle
      } else {
        left = middle
      }
    }
    return middle
  }
}
