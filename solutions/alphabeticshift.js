function alphabeticShift(inputString) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65)
    const alphabet = alpha.map((x) => String.fromCharCode(x))
    const lowAlphabet = alphabet.map(letter => {
        return letter.toLowerCase()
    })
    const letters = inputString.split('')
    const editedWord = []

    for(let i = 0; i < letters.length; i++) {
        const location = lowAlphabet.indexOf(letters[i], 0)
        let editedLetter = lowAlphabet[location + 1]
        if(location === 25) {
            editedLetter = 'a'
        }
        editedWord.push(editedLetter)
    }

    const finalWord = editedWord.join('')
    return finalWord
}
