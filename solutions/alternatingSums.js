// Several people are standing in a row and need to be divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights of the people. Return an array of two integers,
// where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

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
