// Some people are standing in a row in a park. There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

function sortByHeight(a) {
    const filteredA = a.filter(num => {
        return num > 0
    })
    const orderedNums = filteredA.sort((a, b) => {
        return a - b
    })
    console.log(orderedNums)
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== -1) {
            a.splice(i, 1, orderedNums[0])
            orderedNums.shift()
        }
    }
    return a
}
