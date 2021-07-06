// An IP address is a numerical label assigned to each device (e.g., computer, printer)
// participating in a computer network that uses the Internet Protocol for communication.
// There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
// Given a string, find out if it satisfies the IPv4 address naming rules.

function isIPv4Address(inputString) {
    let good = true
    const regex = /[a-zA-Z]/g
    const arr = inputString.split('.')
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "") {
            good = false
            break
        } else if((arr[i] > 255) || (arr[i] < 0)) {
            good = false
            break
        } else if(regex.test(arr[i])) {
            good = false
            break
        } else if(arr[i].includes(0)) {
            const check = arr[i].split('')
            if((check.length > 1) && (check[0] === '0')) {
                good = false
                break
            }
        }
    }

    if(arr.length !== 4) {
        good = false
    }
    return good
}
