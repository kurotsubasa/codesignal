// Given a string, find out if its characters can be rearranged to form a palindrome.

function palindromeRearranging(inputString) {
    const letterCount = {}
    const arr = inputString.split('')
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] in letterCount) {
            letterCount[arr[i]] += 1
        } else {
            letterCount[arr[i]] = 1
        }
    }

    let oddCounts = 0

    const counts = Object.values(letterCount)
    const outliers = counts.filter(num => {
        return num % 2 === 1
    })
    if(outliers.length > 1) {
        return false
    } else {
        return true
    }
    console.log(arr)
    console.log(letterCount)
}
