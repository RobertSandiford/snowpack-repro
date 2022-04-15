
import { find } from './find.js'

export function routeFromPathOrRoute(arg, location) {

    if (typeof arg === 'string') {
        const path = arg
    
        const routeOrNull = find(path)
    
        if (routeOrNull === null) return null
        return routeOrNull
    } else if (typeof arg === 'object') {
        return arg
    } else {
        throw new Error(`${location} error:`
            + ` argument 1 must be a path (type string) or a`
            + ` route (type object), received ${typeof arg}`)
    }

}
