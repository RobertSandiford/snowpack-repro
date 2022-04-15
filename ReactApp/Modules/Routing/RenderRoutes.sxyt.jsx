

import { StaticRouter  } from 'react-router-dom'
import '~ReactRoutes'
import { RenderRoutes } from './index.js'


describe("Module Routing, Component RenderRoutes", function ({it}) {
    
    it("Should render the home page for route '/'", function () {
        //this.slow(500)
        
        const location = '/'

        render(
            <StaticRouter location={location}>
                <RenderRoutes />
            </StaticRouter>
        )

        screen.getAllByRole('main').should.not.be.null

        screen.getByText('Home', { exact: false }).should.not.be.null
    
    })

})

