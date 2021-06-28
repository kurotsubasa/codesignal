function addBorder(picture) {
    let completePic = []
    for(let i = 0; i < picture.length; i++) {
        const pic = picture[i].split('')
        pic.push('*')
        pic.unshift('*')
        const fullPic = pic.join('')
        completePic.push(fullPic)
    }
    console.log(completePic[0])
    const ends = completePic[0].split('').map((char => {
        return '*'
    }))
    const enders = ends.join('')
    completePic.push(enders)
    completePic.unshift(enders)
    return completePic
}
