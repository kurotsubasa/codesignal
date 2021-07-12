function minesweeper(matrix) {
    console.log(matrix)
    const numMatrix = matrix.map(arr => {
        const neoArr = arr.map(boolean => {
            return 0
        })
        return neoArr
    })
    console.log(numMatrix)

    const ifExist = (x, y) => {
        if((x < 0) || y < 0) {
            return
        }
        if(numMatrix[x][y]) {
            numMatrix[x][y] +=1
        }
    }

    const miner = (x, y) => {
        console.log(x)
        console.log(y)
        ifExist(x-1, y-1)
        ifExist(x-1, y)
        ifExist(x-1, y+1)
        ifExist(x, y-1)
        ifExist(x, y)
        ifExist(x, y+1)
        ifExist(x+1, y-1)
        ifExist(x+1, y)
        ifExist(x+1, y+1)
    }
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === true) {
                miner(i, j)
            }
        }
    }
    console.log(numMatrix)
}
