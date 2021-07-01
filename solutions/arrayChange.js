// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one.
// Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

function arrayChange(inputArray) {
    let minMoves = 0

    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i + 1] < inputArray[i]) {
            const diff = Math.abs(inputArray[i] - inputArray[i + 1])
            inputArray[i + 1] = inputArray[i + 1] + (diff + 1)
            minMoves += (diff + 1)
        } else if(inputArray[i + 1] === inputArray[i]) {
            const change = 1
            inputArray[i + 1] = inputArray[i + 1] + change
            minMoves++
        }
    }

    return minMoves
}
