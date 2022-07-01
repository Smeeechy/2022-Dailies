/*
Write a custom React hook named useFetch that takes in a url and returns the following object:

{
    responseJSON,   // the response data in json form if received, otherwise null
    isLoading,      // a boolean for whether or not the fetch promise has resolved
    error           // an error if encountered, otherwise null
}

A fetch request should be sent once upon mounting, and again every time the given url changes.
*/

import { useState, useEffect } from 'react'

const useFetch = url => {
    const [responseJSON, setResponseJSON] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(json => setResponseJSON(json))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }, [url])

    return { responseJSON, isLoading, error }
}

export default useFetch