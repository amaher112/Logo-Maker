const {Square} = require('../lib/shapes.js')

describe('Shape', () => {
    describe('Square', () => {
        it('should instantiate square class and set color', () => {
const shape = new Square()
shape.setColor('blue')
expect(shape.textColor).toBe('blue')
        })
        it('should render output appropriately', () => {

        })
    })
})