function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    const finArr = inputArray.map(elem => {
        if(elem === elemToReplace) {
            return substitutionElem
        } else {
            return elem
        }
    })
    return finArr
}
