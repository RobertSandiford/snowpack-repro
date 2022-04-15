
import { chunkNameFromFilePath } from './chunkNameFromFilePath.js'


describe("Routing Modules chunkNameFromFilename() function", function ({it}) {
    
    it("Should convert a filename to a unique-ish chunk name", function () {

        // with extension
        const chunkName1 = chunkNameFromFilePath('Pages/Foo.js')

        // without extension
        const chunkName2 = chunkNameFromFilePath('Pages/Bar')
      
        chunkName1.should.equal('Pages_Foo')
        chunkName2.should.equal('Pages_Bar')
    })

})
