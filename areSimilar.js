function areSimilar(a, b) {
    let identicalCounter = 0
    const outliers = [[], []]
    for(let i = 0; i < a.length; i++) {
        if(a[i] === b[i]) {
            identicalCounter++
        } else {
            outliers[0].push(a[i])
            outliers[1].push(b[i])
        }
    }
    console.log(identicalCounter)
    console.log(outliers)

    if(outliers[0].length > 2) {
        return false
    } else if((outliers[0][0] !== outliers [1][1]) || (outliers[0][1] !== outliers[1][0])) {
        return false
    }

    if(identicalCounter === a.length) {
        return true
    } else if(identicalCounter === (a.length - 2)) {
        return true
    }
}
