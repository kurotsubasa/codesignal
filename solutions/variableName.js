// Correct variable names consist only of English letters, digits and underscores and they can't start with a digit.
//
// Check if the given string is a correct variable name.

function variableName(name) {
    let correct = true
    const arr = name.split('')

    if(isNaN(arr[0]) === false) {
        correct = false
    }


    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ' ') {
            correct = false
        }

        if(arr[i].toUpperCase() === arr[i].toLowerCase()) {
            if(isNaN(arr[i]) === true) {
                if(arr[i] !== '_') {
                    correct = false
                }
            }
        }
    }

    return correct
}
