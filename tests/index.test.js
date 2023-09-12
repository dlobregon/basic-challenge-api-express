
// calling the routers called in index.js
const generalRoutes = require('../src/routes/generalRoutes')
const numberRoutes = require('../src/routes/numberRoutes')

// mocking the functions for 'use()' and 'listen()' methods from express
const useSpy = jest.fn()
const listenSpy = jest.fn()
const jsonSpy = jest.fn()


// mocking the express module
jest.doMock('express', () => {
    const mockedExpress = () => {
        return {
            use: useSpy,
            listen: listenSpy
        }
    }
    Object.defineProperty(mockedExpress, 'json', { value: jsonSpy })
    return mockedExpress
})

// running the test
describe('should test server configuration', () => {

    test('call express.json middleware', () => {
        require('../src/index.js')
        expect(jsonSpy).toHaveBeenCalled()
    })

    test('use generalRoutes router', () => {
        require('../src/index.js')
        expect(useSpy).toHaveBeenCalledWith('/', generalRoutes)
        expect(useSpy).toHaveBeenCalledWith('/number', numberRoutes)
    })

    test('should call the listener', () => {
        require('../src/index.js')
        expect(listenSpy).toHaveBeenCalled()
    })
})
