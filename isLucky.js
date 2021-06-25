function isLucky(n) {
    const nArr = n.toString().split('')
    const nArr1 = nArr.map(num => {
        return parseInt(num)
    })
    console.log(nArr)
    console.log(nArr1)
    const mid = nArr1.length / 2
    const nArr2 = nArr1.splice(0, mid)

    let sum1 = 0
    let sum2 = 0
    for(let i = 0; i < nArr1.length; i++) {
        sum1 += nArr1[i]
        sum2 += nArr2[i]
    }

    if(sum1 === sum2) {
        return true
    } else {
        return false
    }
}
