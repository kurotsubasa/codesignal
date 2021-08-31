function circleOfNumbers(n, firstNumber) {
    const midDiff = (n / 2)
    const initialValue = firstNumber + midDiff
    let finalValue

    if(initialValue > (n - 1)) {
        finalValue = (initialValue - n)
    }

    if (finalValue === undefined) {
        finalValue = initialValue
    }

    return finalValue
}
