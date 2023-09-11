const express = require('express')
const app = express()
const generalRoutes = require('./routes/generalRoutes')
const numberRoutes = require('./routes/numberRoutes')


app.use(express.json())

app.use('/', generalRoutes)
app.use('/number', numberRoutes)



app.listen(3000, () => {
    console.log('running application at 3000')
})