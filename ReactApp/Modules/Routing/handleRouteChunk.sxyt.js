

import { handleRouteChunk } from './handleRouteChunk.js'


describe("Routing Module, handleRouteChunk() function", function ({it}) {
    
    it("Should set route.chunk to the chunk name version of the content file"
        + " for a route that uses file content and has no specified bundle", function () {

        const route = {
            path: '/foo',
            content: 'Pages/Foo.js',
            contentType: 'file'
        }

        handleRouteChunk(route)

        route.chunk.should.equal('Pages_Foo')

    })

    it("Should set route.chunk to the bundle specified"
        + " for a route that uses file content and specifies a bundle", function () {

        const route = {
            path: '/foo',
            content: 'Pages/Foo.js',
            contentType: 'file',
            bundle: 'frontend'
        }

        handleRouteChunk(route)

        route.chunk.should.equal('frontend')

    })

    it("Should leave route.chunk unset"
        + " for a route that uses element content and does not specify bundle", function () {

        const route = {
            path: '/foo',
            content: function Component() { return 'hi' },
            contentType: 'element'
        }

        handleRouteChunk(route)

        route.should.not.include.keys('chunk')

    })

    it("Should leave route.chunk unset"
        + " for a route that uses element content and specifies a bundle", function () {

        const route = {
            path: '/foo',
            content: function Component() { return 'hi' },
            contentType: 'element',
            bundle: 'frontend'
        }

        handleRouteChunk(route)

        route.should.not.include.keys('chunk')

    })

})

