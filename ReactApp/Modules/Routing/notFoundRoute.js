
import React from 'react'

import { moduleName } from './config.js'
import { warn } from './output.js'
import { routes } from './routes.js'
import { handleRouteContent } from './handleRouteContent.jsx'


export function notFoundRoute(content = null, extras = {}) {

    //validation
    if ( typeof content !== 'string' && ! React.isValidElement(content) )
        throw new Error(`${moduleName} route() error`
            + ` argument 2 \`content\` must be a react element, e.g. <Home />,`
            + ` or a string referring to a file from the base of the react app, e.g. 'Pages/Home.js'`)
    
    if ('default' in routes)
        warn(`${moduleName} notFoundRoute() Warning:`
            + ` a default or notFound route already exists. It will be overwritten by this call`)

    //if ( ! ('exact' in extras) ) extras.exact = true
    //if ( ! ('cache' in extras) ) extras.cache = false
    //if ( ! ('static' in extras) ) extras.static = false
    
    const contentType = (React.isValidElement(content)) ? 'element' : 'file'

    const defaultRoute = {
        content,
        contentType,
        default: true,
        httpCode: 404,
        ...extras
    }

    const handleRouteContentPromise = handleRouteContent(defaultRoute)
    defaultRoute.contentPromise = handleRouteContentPromise

    Object.defineProperty(routes, 'default', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: defaultRoute
    })

    // return a RouteEntity?

    /*routesDefault = new Route({
        path: ':default',
        exact: false,
        dataLoader,
        render,
    })*/
}
