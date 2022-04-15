
import React from 'react'

import { warn } from './output.js'
import { routes } from './routes.js'
import { handleRouteChunk } from './handleRouteChunk.js'
import { handleRouteContent } from './handleRouteContent.jsx'
import { moduleName } from './config.js'



export function defaultRoute(content = null, extras = {}) {

    //validation
    if ( ! React.isValidElement(content) )
        throw  new Error(`${moduleName} route() error`
            + `argument 2 \`content\` should be a react element, e.g. <Home />`)
    
    
    if ('default' in routes)
        warn(`${moduleName} defaultRoute() Warning:`
            + ` a default or notFound route already exists. It will be overwritten by this call`)

    //if ( ! ('exact' in extras) ) extras.exact = true
    //if ( ! ('cache' in extras) ) extras.cache = false
    //if ( ! ('static' in extras) ) extras.static = false
    
    const contentType = (React.isValidElement(content)) ? 'element' : 'file'

    const defaultRoute = {
        content,
        contentType,
        default: true,
        ...extras
    }

    // set the chunk field on the route appropriately
    handleRouteChunk(defaultRoute)

    // do some prepping of loading of the content for the route
    // what this does varies between server (loads content at start up)
    // and client (load chunks on demand)
    handleRouteContent(defaultRoute)

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
