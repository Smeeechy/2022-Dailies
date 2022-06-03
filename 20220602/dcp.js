/*
given an array, return its powerset.

a powerset is a set of all possible subsets. for example:
[1, 2, 3] => [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
*/

const powerset = set => {
    let subsets = new Set()
    subsets.add(new Set())
    while (true) {
        let size = subsets.size
        let newSubsets = new Set(...subsets)
        subsets.forEach(subset => {
            set.forEach(el => {
                let newSubset = new Set([el, ...subset])
                newSubsets.add(newSubset)
            })
        })
        subsets = new Set(...newSubsets)
        if (subsets.size === size) break
    }
    return subsets
}

const args = process.argv.slice(2)
const result = powerset(args.map(Number))
console.log(result)
