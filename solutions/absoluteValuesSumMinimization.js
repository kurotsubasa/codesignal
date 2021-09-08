function absoluteValuesSumMinimization(a) {
    const results = []

    for(let i = 0; i < a.length; i++) {
        const currentResults = []
        for(let x = 0; x < a.length; x++) {
            const result = Math.abs(a[x] - a[i])
            currentResults.push(result)
        }

        const endResult = currentResults.reduce((acc, num) => { return acc + num})
        results.push(endResult)
    }

    let lowest = results[0]
    let lowestIndex = 0

    for(let i = 1; i < results.length; i++) {
        if(results[i] < lowest) {
            lowest = results[i]
            lowestIndex = i
        }
    }

    return a[lowestIndex]
}
