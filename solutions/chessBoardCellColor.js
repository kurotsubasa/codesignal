function chessBoardCellColor(cell1, cell2) {
    let cell1Color
    let cell2Color
    const splitCell1 = cell1.split('')
    const splitCell2 = cell2.split('')
    if (splitCell1.includes('A') || splitCell1.includes('C') || splitCell1.includes('E') || splitCell1.includes('G')) {
        if(splitCell1[1] % 2 !== 0) {
            cell1Color = 'black'
        } else {
            cell1Color = 'white'
        }
    } else {
        if(splitCell1[1] % 2 === 0) {
            cell1Color = 'black'
        } else {
            cell1Color = 'white'
        }
    }

    if (splitCell2.includes('A') || splitCell2.includes('C') || splitCell2.includes('E') || splitCell2.includes('G')) {
        if(splitCell2[1] % 2 !== 0) {
            cell2Color = 'black'
        } else {
            cell2Color = 'white'
        }
    } else {
        if(splitCell2[1] % 2 === 0) {
            cell2Color = 'black'
        } else {
            cell2Color = 'white'
        }
    }

    if(cell1Color === cell2Color) {
        return true
    } else {
        return false
    }

}
