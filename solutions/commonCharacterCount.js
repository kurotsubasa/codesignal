// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
    let commonChar = 0

    const s1Arr = s1.split('')
    const s2Arr = s2.split('')
    for(let i = 0; i < s1Arr.length; i++) {
        for(let x = 0; x < s2Arr.length; x++) {
            if(s1Arr[i] === s2Arr[x]) {
                commonChar++
                s2Arr.splice(x, 1)
                break
            }
        }
    }
    return commonChar
}
