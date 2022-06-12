/*
Given a string of characters and a target document string, return whether or not you can use the given characters to create the document.
*/

const generateDocument = (characters, document) => {
    for (const docChar of document) {
        const charIndex = characters.indexOf(docChar)
        if (charIndex === -1 || characters.length === 0) return false
        const newCharacters = characters.split('')
        newCharacters.splice(charIndex, 1)
        characters = newCharacters.join('')
    }
    return true
}

const args = process.argv.slice(2)
const characters = args[0]
const document = args[1]
const result = generateDocument(characters, document)
console.log(result)