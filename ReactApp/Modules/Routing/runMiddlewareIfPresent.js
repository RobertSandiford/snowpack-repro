
import { moduleName } from './config.js'
import { runMiddleware } from './runMiddleware.js'


export async function runMiddlewareIfPresent(route, middlewareParcel = {}) {

    //console.log('runMiddlewareIfPresent func')

    if (route === null) {
        if (isDev) {
            throw new Error(
                `${moduleName} runMiddlewareIfPresent() error:`
                + ` route was null`
            )
        }
        return null // return null is there was no route
    }

    // get express request and response if we are server side
    //let req, res
    //if (isServer) {
    //    req = global.__rev_server_request__
    //    res = global.__rev_server_response__
    //}

    // do middleware
    if ( 'middleware' in route && route.middleware ) {
        return await runMiddleware(route, middlewareParcel)
    }

    return true
}
