
import { moduleName } from './config.js'
import { shouldRunMiddleware } from './shouldRunMiddleware.js'


export async function runMiddleware(route, middlewareParcel = {}) {

    //console.log('running middleware')

    //console.log('runMiddlewareIfPresent - there is middleware')
    //return null
    
    const middlewares = (Array.isArray(route.middleware))
        ? route.middleware
        : [route.middleware]

    for (const middleware of middlewares) {
        if (typeof middleware !== 'function') {
            throw new Error(
                `${moduleName} runMiddleware() error,`
                    + `a middleware for route ${route.key} is not a function.`
                    + ` Got a ${typeof middleware} instead`
            )
        }
        if (shouldRunMiddleware(middleware, middlewareParcel.navType)) {
            const result = await middleware(middlewareParcel)
            //console.log('runMiddlewareIfPresent middleware result', result)
            if (result === false) {
                return false
            }
        }
    }

    return true

}
