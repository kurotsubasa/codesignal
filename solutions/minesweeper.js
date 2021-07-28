function minesweeper(matrix) {
    console.log(matrix)
    const numMatrix = matrix.map(arr => {
        const neoArr = arr.map(boolean => {
            return 0
        })
        return neoArr
    })

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j]) {
                if(!((i-1) < 0) || (!((j-1) < 0))) {
                    numMatrix[i-1][j-1] +=1
                }
            }
        }
    }
    console.log(numMatrix)
}
