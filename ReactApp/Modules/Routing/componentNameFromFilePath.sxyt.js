
import { componentNameFromFilePath } from './componentNameFromFilePath.js'

describe("Routing Module, componentNameFromFilePath() function", function ({it}) {
    
    it("Should find the commponent name from a file path", function () {
        // with extension
        const componentName = componentNameFromFilePath('Pages/Foo.js')
        componentName.should.equal('Foo')
    })

    it("Should find the component name from a file path without extension", function () {
        // without extension
        const componentName = componentNameFromFilePath('Pages/Bar')
        componentName.should.equal('Bar')
    })

    it("Should find the commponent name from a file path with backslashes", function () {
        // with back slashes
        const componentName = componentNameFromFilePath('Pages\\Baz')
        componentName.should.equal('Baz')
    })

    it("Should find the commponent name from a file path with with extra folders", function () {
        // with back slashes
        const componentName = componentNameFromFilePath('Pages/baz/Bim.js')
        componentName.should.equal('Bim')
    })

})
