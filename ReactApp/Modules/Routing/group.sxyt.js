

import { group } from './group.js'


describe("Routing Modules group() function", function ({it}) {
    
    it("Should pass values through to child routes and groups", function () {

        group(
            { basePath: 'foo', bundle: 'foo' },
            ({route, group}) => {
                const childRoute = route('bar', null)

                childRoute.route.path.should.equal('/foo/bar')

                group(
                    { basePath: 'baz' },
                    ({route}) => {
                        const childRoute2 = route('bim', null)

                        childRoute2.route.path.should.equal('/foo/baz/bim')
                    }
                )
            }
        )
        
    })

})

