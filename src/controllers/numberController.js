const database = []

const addNumber = (number) => {
    const numberIndex = database.lastIndexOf(number)
    if (numberIndex === -1)
        database.push(number)

    return database
}

const deleteNumber = (number) => {
    const numberIndex = database.lastIndexOf(number)
    console.log(numberIndex)
    if (numberIndex >= 0) {
        database.splice(numberIndex, 1)
    }
    return database
}

const changeNumber = (initial, replacement) => {
    const numberIndex = database.lastIndexOf(initial)
    if (numberIndex >= 0 && replacement) {
        database.splice(numberIndex, 1, replacement)
    }
    return database
}


module.exports = {
    addNumber,
    deleteNumber,
    changeNumber,
}