const router = require('express').Router()
const numberController = require('../controllers/numberController')

router.route('/:number/:replacement?')
    .post((req, res) => {
        const { number } = req.params
        const data = numberController.addNumber(number)
        res.status(200).json(data)
    })
    .delete((req, res) => {
        const { number } = req.params
        console.log(number)
        const data = numberController.deleteNumber(number)
        res.status(200).json(data)
    })
    .put((req, res) => {
        const { number, replacement } = req.params
        const data = numberController.changeNumber(number, replacement)
        res.status(200).json(data)
    })

module.exports = router