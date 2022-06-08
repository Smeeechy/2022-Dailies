/*
create a debounce function that takes in a callback, a delay, and an optional flag to run the callback immediately
*/

const debounce = (callback, delay, immediate = false) => {
    let id
    return function(...args) { // can't use an arrow function here because we need 'this'
        clearTimeout(id)
        if (!id && immediate) callback.apply(this, args)
        id = setTimeout(() => {
            if (!immediate) callback.apply(this, args)
            id = null
        }, delay)
    }
}