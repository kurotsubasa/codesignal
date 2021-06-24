function matrixElementsSum(matrix) {
    let sum = 0
    for(let i = 0; i < matrix.length; i++) {
        for(let x = 0; x < matrix[i].length; x++) {
            if(matrix[i - 1]) {
                let usable = true
                for(let y = 0; y < i; y++) {
                    if(matrix[y][x] === 0) {
                        usable = false
                        break
                    }
                }
                if( usable === true) {
                    sum = sum + matrix[i][x]
                }
            }
        //    if(matrix[i - 1]) {
        //        if(matrix[i-1][x] !== 0){
        //            sum = sum + matrix[i][x]
        //        }
        //    }
           if(!matrix[i-1]) {
               if(matrix[i][x] !== 0) {
                   sum = sum + matrix[i][x]
               }
           }
        }
    }
    return sum
}
