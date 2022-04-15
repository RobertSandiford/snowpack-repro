
import PropTypes from 'prop-types'
import { Router, StaticRouter, useHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { useStore } from '~Store/index.js'

//import { packageName } from './config.js'

//import { AppComponent } from '../../AppComponent.js'


Routing.propTypes = {
    location: PropTypes.object
}
export function Routing({location, children}) {

    if (isClient) {

        // inject the location state info (routeData) into history
        const history = createBrowserHistory()
        //console.log('history', history)
        //console.log('location', location)
        history.replace(location)

        return (
            <Router history={history}>
                <RoutingInner>
                    {children}
                </RoutingInner>
            </Router>
        )
    }

    if (isServer) {
        return (
            <StaticRouter location={location}>
                <RoutingInner>
                    {children}
                </RoutingInner>
            </StaticRouter>
        )
    }

    // return (isServer)
    //     ? <StaticRouter location={location}>
    //         {children}
    //     </StaticRouter>
    //     : <BrowserRouter>
    //         {children}
    //     </BrowserRouter>
                     
}


// we just do this so we can grab the history created by react router
// which appears to be different to the history we provided it
function RoutingInner({children}) {
    const store = useStore()
    const reactRouterHistory = useHistory()
    store.create('history', reactRouterHistory)
    return children
}