// function minesweeper(matrix) {
//     console.log(matrix)
//     const numMatrix = matrix.map(arr => {
//         const neoArr = arr.map(boolean => {
//             return 0
//         })
//         return neoArr
//     })
//
//     for(let i = 0; i < matrix.length; i++) {
//         for(let j = 0; j < matrix[i].length; j++) {
//             if(matrix[i][j]) {
//                 if(!((i-1) < 0)) {
//                     if(!((j-1) < 0)) {
//                         numMatrix[i-1][j-1] +=1
//                         numMatrix[i][j-1] +=1
//                         if((i+1) < matrix.length) {
//                             numMatrix[i+1][j-1] +=1
//                         }
//                     }
//                     if(!(j > matrix[i].length)) {
//                         numMatrix[i-1][j] +=1
//                         numMatrix[i][j] +=1
//                         if((i+1) < matrix.length) {
//                             numMatrix[i+1][j] +=1
//                         }
//                     }
//                     if(!((j+1) > matrix[i].length)) {
//                         numMatrix[i-1][j+1] +=1
//                         numMatrix[i][j+1] +=1
//                         if((i+1) < matrix.length) {
//                             numMatrix[i+1][j+1] +=1
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     console.log(numMatrix)
// }

/**
 * The simplest way to accomplish this task is to manually check each direction for every element in the matrix.
 * We can create a `directions` array to shorten the code for doing so, having it represent the x and y deltas.
 *
 * Aside from that, it's rather self-explanatory.
 */

 var dirs = [ { r: -1, c: -1 },
              { r: -1, c:  0 },
              { r: -1, c:  1 },
              { r:  0, c:  1 },
              { r:  0, c: -1 },
              { r:  1, c: -1 },
              { r:  1, c:  0 },
              { r:  1, c:  1 }];

 function minesweeper(matrix) {
     return matrix.map((a,r) => a.map((_,c) => dirs.reduce((p,v) => p+=(matrix[r+v.r]||[])[c+v.c]|0, 0)))
 }
