
//import React from 'react'

//import { moduleName } from './config.js'

export function route() {}

//import { standardizeWebPath, safeWebPathForStartOfCombinedPath } from "../../Lib/functions.js"
//import { routes } from './routes.js'
//import { handleRouteChunk } from './handleRouteChunk.js'
//import { handleRouteContent } from './handleRouteContent.jsx'
//import { chunkNameFromFilePath } from './chunkNameFromFilePath.js'
/*
// this is here to avoid a circular dependency.
export class RouteEntity {
    constructor(route) { // future replacement
        this.route = route
    }
    children(callback) {
        const childRoute = (path, content, extra) => route(path, content, extra, this)
        callback(childRoute)
    }
}


export function route(path, content = null, extras = {}, parent = null) {

    //validation
    if ( typeof path !== 'string' )
        throw new Error(`${moduleName} route() error:`
            + ` argument 1 \`path\` should be a string`)

    if ( standardizeWebPath(path) === '/default')
        throw new Error(`${moduleName} route() error:`
            + ` 'default' for argument 1 \`path\` is reserved for the default path.`
            + ` please use another path`)

    if ( typeof content !== 'string' && ! React.isValidElement(content) && content !== null )
        throw new Error(`${moduleName} route() error`
            + ` argument 2 \`content\` must be a react element, e.g. <Home />,`
            + ` or a string referring to a file from the base of the react app, e.g. 'Pages/Home.js'.`
            + ` received: ${typeof content}`)
    
    if ( parent && ! (parent instanceof RouteEntity) )
        throw new Error(`${moduleName} route() error`
            + ` if provided, argument 4 \`parent\` must be a route entity, an instance of RouteEntity`)
    
    if ( parent ) {
        path = standardizeWebPath(
            safeWebPathForStartOfCombinedPath(parent.route.path) + standardizeWebPath(path)
        )
    }

    const contentType = (React.isValidElement(content) || content === null) ? 'element' : 'file'

    const route = {
        key: path,
        path: standardizeWebPath(path),
        content,
        contentType,
        default: false,
        exact: true, // can be overwritten by extras
        ...extras,
    }

    // set the chunk field on the route appropriately
    handleRouteChunk(route)

    // do some prepping of loading of the content for the route
    // what this does varies between server (loads content at start up)
    // and client (load chunks on demand)
    const handleRouteContentPromise = handleRouteContent(route)
    route.contentPromise = handleRouteContentPromise


    routes[path] = route

    return new RouteEntity(route) // this is better
}

*/
