function evenDigitsOnly(n) {
    let even = true
    const digits = n.toString(10).split('').map(num => { return parseInt(num) })

    for(let i = 0; i < digits.length; i++) {
        if((digits[i] % 2) !== 0) {
            even = false
        }
    }
    return even
}
