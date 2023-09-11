const router = require('express').Router()
const generalController = require('../controllers/generalController')

router.get('/static', (req, res) => {
    res.send(generalController.generalStatic())
})

router.get('/staticJSON', (req, res) => {
    res.json(generalController.staticJson())
})

router.get('/echo', (req, res) => {
    res.send(generalController.textInVariable(req))
})

router.get('/plus/:a/:b', (req, res) => {
    res.send(generalController.plusByParams(req))
})

router.get('/plus', (req, res) => {
    res.send(generalController.simplePlus(req))
})

router.get('/plusByJSON', (req, res) => {
    res.send(generalController.jsonByQuery(req))
})

router.get('/checkEvenNumber/:number', (req, res) => {
    const result = generalController.checkEven(req)
    if (result) {
        res.sendStatus(200)
    } else {
        res.sendStatus(400)
    }
})

router.post('/countFields', (req, res) => {
    const result = generalController.countFields(req)
    res.status(200).json({ count: result })
})


module.exports = router