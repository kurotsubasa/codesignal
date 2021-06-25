function reverseInParentheses(inputString) {
    // const controlArr = inputString.split('')
    // const stringArr = inputString.split('')
    // const parenthesesIndexes = []
    // for(let i = 0; i < stringArr.length; i++) {
    //     if((stringArr[i] === '(') || (stringArr[i] === ')')) {
    //         parenthesesIndexes.push(i)
    //     }
    // }
    // const parenthesesReach = parenthesesIndexes[parenthesesIndexes.length -1] - parenthesesIndexes[0] + 1
    // const allParentheses = stringArr.splice(parenthesesIndexes[0], parenthesesReach)
    // if(parenthesesIndexes.length > 2) {
    //     if(controlArr[parenthesesIndexes[parenthesesIndexes.length - 2]] === ')') {
    //         const cutter = (parenthesesIndexes[1] - parenthesesIndexes[0]) + 1
    //         const endCut = (parenthesesIndexes[2] - cutter) - 3
    //         const secondaryArr = allParentheses.splice(cutter, endCut)
    //         const reverseSecondaryArr = secondaryArr.reverse()
    //         allParentheses.splice((cutter), 0, reverseSecondaryArr)
    //         const newAllParentheses = allParentheses.flat()
    //         const pureChars = newAllParentheses.filter(char => {
    //             return char !== '(' && char !== ')'
    //         })
    //         const reverseChars = pureChars.reverse()
    //         stringArr.splice(parenthesesIndexes[0], 0, reverseChars)
    //         const fullCompleteReverse = stringArr.flat()
    //         return fullCompleteReverse.join('')
    //     } else {
    //         const endCut = parenthesesIndexes[1] - parenthesesIndexes[0] - 1
    //         const arr1 = allParentheses.splice(1, endCut)
    //         const cutter = parenthesesIndexes[2] - parenthesesIndexes[1] + 2
    //         const endCut2 = parenthesesIndexes[3] - parenthesesIndexes[2] - 1
    //         const arr2 = allParentheses.splice(cutter, endCut2)
    //         const reverseArr1 = arr1.reverse()
    //         const reverseArr2 = arr2.reverse()
    //         allParentheses.splice(1, 0, reverseArr1)
    //         allParentheses.splice(cutter + 1, 0, reverseArr2)
    //         const newAllParentheses = allParentheses.flat()
    //         const pureChars = newAllParentheses.filter(char => {
    //             return char !== '(' && char !== ')'
    //         })
    //         stringArr.splice(parenthesesIndexes[0], 0, pureChars)
    //         const fullCompleteReverse = stringArr.flat()
    //         return fullCompleteReverse.join('')
    //     }
    // }
    // const newAllParentheses = allParentheses.reverse()
    // const pureChars = newAllParentheses.filter(char => {
    //     return char !== '(' && char !== ')'
    // })
    // stringArr.splice(parenthesesIndexes[0], 0, pureChars)
    // const fullCompleteReverse = stringArr.flat()
    // return fullCompleteReverse.join('')

        while (true) {
        let c = inputString.indexOf(")")

        if (c === -1) {
            break
        }

        let o = inputString.substring(0, c).lastIndexOf("(")
        console.log(o)
        console.log(c)

        let start = inputString.substring(0, o)
        let middle = inputString.substring(o + 1, c).split("").reverse().join("")
        let end = inputString.substring(c + 1, inputString.length)

        inputString = start + middle + end
    }

    return inputString
}
