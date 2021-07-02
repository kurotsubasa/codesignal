// Call two arms equally strong if the heaviest weights they each are able to lift are equal.
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.
// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let strongEqual = false
    let weakEqual = false

    const you = [yourLeft, yourRight]
    const friend = [friendsLeft, friendsRight]
    you.sort((a, b) => { return a - b })
    friend.sort((a, b) => { return a - b })
    console.log(you)
    console.log(friend)
    if(you[0] === friend[0]) {
        strongEqual = true
    }
    if(you[1] === friend[1]) {
        weakEqual = true
    }
    if((strongEqual === true) && (weakEqual === true)) {
        return true
    } else {
        return false
    }
}
