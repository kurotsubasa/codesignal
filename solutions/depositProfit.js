function depositProfit(deposit, rate, threshold) {
    let years = 0
    let balance = deposit
    const percent = rate / 100

    while(balance < threshold) {
        balance = (balance + (balance * percent))
        years++
    }

    return years
}
