
import { isValidBundle } from './isValidBundle.js'


describe("Routing Module, isValidBundle function", function ({it}) {
    
    it("should return true for a string with content", function () {
        isValidBundle('foo').should.be.true
    })

    it("should return false for an empty string", function () {
        isValidBundle('').should.be.false
    })

    it("should return false for a null value", function () {
        isValidBundle(null).should.be.false
    })

    it("should return false for an undefined value", function () {
        isValidBundle(undefined).should.be.false
    })

})

