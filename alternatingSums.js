function alternatingSums(a) {
    const arr1 = []
    const arr2 = []
    let totals = [0, 0]


    for(let i = 0; i < a.length; i++) {
        if((i === 0) || (i % 2 === 0)) {
            arr1.push(a[i])
        } else {
            arr2.push(a[i])
        }
    }

    if(a.length === 1) {
        totals = [a[0], 0]
    } else if(a.length === 2) {
        totals = [a[0], a[1]]
    } else {
        const arr1Sum = arr1.reduce((total, weight) => {
            return total + weight
        })

        const arr2Sum = arr2.reduce((total, weight) => {
            return total + weight
        })
        totals = [arr1Sum, arr2Sum]
    }

    return totals
}
