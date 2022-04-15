
import { expect } from "chai"

import { Route } from './RouteComponent.jsx'


describe("Routing Module, Component Route", function ({it}) {
    
    it("Should render some passed content", function () {

        const routeContent = "Route Content"

        const { container } = render( <Route path="/">{routeContent}</Route> )
        
        // check that it rendered an <a>
        //expect(
        //    container.querySelector('a')
        //).not.to.be.null

        //console.log('tc', container.textContent)

        // check that the link text is what we passed in
        expect(
            container.textContent
        ).to.equal(routeContent)
        
    })

    //it("Should only render content when the web path matches it's path", async function() {

    //})

})
