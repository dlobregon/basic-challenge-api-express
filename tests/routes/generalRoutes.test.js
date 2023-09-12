const request = require('supertest')
const express = require('express')
const app = express()
const generalRoutes = require('../../src/routes/generalRoutes')
app.use(express.json())
app.use('/', generalRoutes)

describe('should test generalRoutes', () => {
    it('Test static response', async () => {
        const res = await request(app)
            .get('/static')

        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual('Hello World')
    })

    it('Test staticJson', async () => {
        const res = await request(app)
            .get('/staticJSON')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({ text: 'Hello World' })
    })

    it('Test echo / TextInVariable', async () => {
        const res = await request(app)
            .get('/echo?text=Hola')
        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual('Hola')
    })

    it('Test plus by query', async () => {
        const res = await request(app)
            .get('/plus?a=3&b=5')

        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual('8')
    })

    it('Test plus by params', async () => {
        const res = await request(app)
            .get('/plus/1/2')

        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual('3')
    })


    it('Test plus by JSON', async () => {
        const res = await request(app)
            .get('/plusByJSON?jsonText={a:3,b:5}')

        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual('8')
    })

    it('should return true if the number is even', async () => {
        const res = await request(app)
            .get('/checkEvenNumber/4')

        expect(res.statusCode).toEqual(200)
    })

    it('should retunr false if the number is not even', async () => {
        const res = await request(app)
            .get('/checkEvenNumber/5')

        expect(res.statusCode).toEqual(400)
    })

    it('should count fields', async () => {
        const rest = await request(app)
            .post('/countFields')
            .send({ a: 'a', b: 'b', c: 3 })

        expect(rest.statusCode).toEqual(200)
        expect(rest.body).toEqual({ count: 3 })
    })
})