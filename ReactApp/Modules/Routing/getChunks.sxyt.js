

import { getChunks } from './getChunks.js'


describe("Routing Modules getChunks() function", function ({it}) {
    
    it("Should return an object of chunk names to file paths", function () {

        const routes = {
            '/foo': {
                path: '/foo',
                content: 'Pages/Foo.js'
            },
            '/bar': {
                path: '/bar',
                content: 'Pages/Bar'
            },
            '/baz': {
                path: '/foo',
                content: function() {}
            },
        }
        
        const chunks = getChunks(routes)

        chunks.should.deep.equal({
            'Pages_Foo': ['Pages/Foo.js'],
            'Pages_Bar': ['Pages/Bar'],
        })
    })

})

