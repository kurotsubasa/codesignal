// Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
    let maxStrings = []
    let largestString = 0

    for(let i = 0; i < inputArray.length; i++) {
        const wordArr = inputArray[i].split('')
        if(wordArr.length > largestString) {
            largestString = wordArr.length
            maxStrings = [inputArray[i]]
        } else if(wordArr.length === largestString) {
            maxStrings.push(inputArray[i])
        }
    }
    return maxStrings
}
