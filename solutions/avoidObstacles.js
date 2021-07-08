// You are given an array of integers representing coordinates of obstacles situated on a straight line.
// Assume that you are jumping from the point with coordinate 0 to the right.
// You are allowed only to make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.

function avoidObstacles(inputArray) {
    const orderedArr = inputArray.sort((a, b) => { return a - b })
    let found = false
    let jump = 1
    const leap = orderedArr[orderedArr.length - 1] + 1

    const check = (jump, leap, orderedArr) => {
        let test = jump

        while(test <= leap) {
            if(orderedArr.includes(test)) {
                return false
            }
            test += jump
        }
        return true
    }

    for(jump; jump <= leap; jump++) {
        if(check(jump, leap, orderedArr) === true) {
            return jump
        }
    }
}
