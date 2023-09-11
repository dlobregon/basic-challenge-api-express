const express = require('express')
const app = express()
const generalController = require('./controllers/generalController')
const numberRoutes = require('./routes/numberRoutes')

app.use(express.json())

app.use('/number', numberRoutes)

app.get('/static', (req, res) => {
    res.send(generalController.generalStatic())
})

app.get('/staticJSON', (req, res) => {
    res.json(generalController.staticJson())
})

app.get('/echo', (req, res) => {
    res.send(generalController.textInVariable(req))
})

app.get('/plus/:a/:b', (req, res) => {
    res.send(generalController.plusByParams(req))
})

app.get('/plus', (req, res) => {
    res.send(generalController.simplePlus(req))
})

app.get('/plusByJSON', (req, res) => {
    res.send(generalController.jsonByQuery(req))
})

app.get('/checkEvenNumber/:number', (req, res) => {
    const result = generalController.checkEven(req)
    if (result) {
        res.sendStatus(200)
    } else {
        res.sendStatus(400)
    }
})

app.post('/countFields', (req, res) => {
    const result = generalController.countFields(req)
    res.status(200).json({ count: result })
})


app.listen(3000, () => {
    console.log('running application at 3000')
})