const generalStatic = () => {
    return 'Hello World'
}

const staticJson = () => {
    return { text: 'Hello World' }
}

const textInVariable = (req) => {
    return req.query.text
}

const simplePlus = (req) => {
    return `${parseInt(req.query.a) + parseInt(req.query.b)}`
}

const jsonByQuery = (req) => {
    const [aRaw, bRaw] = req.query.jsonText.split('{')[1].split('}')[0].split(',')
    const a = aRaw.split(':')[1]
    const b = bRaw.split(':')[1]
    return `${parseInt(a) + parseInt(b)}`
}

const plusByParams = (req) => {
    const { a, b } = req.params
    return `${parseInt(a) + parseInt(b)}`
}

const checkEven = (req) => {
    const { number } = req.params
    return number % 2 === 0
}

const countFields = (req) => {
    const count = Object.keys(req.body).length
    return count

}

module.exports = {
    generalStatic,
    staticJson,
    textInVariable,
    simplePlus,
    jsonByQuery,
    plusByParams,
    checkEven,
    countFields,
}