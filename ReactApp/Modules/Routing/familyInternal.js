
import { routeFromPathOrRoute } from './routeFromPathOrRoute.js'
import { childrenOf } from './childrenOf.js'
import { moduleName } from './config.js'

export function familyInternal(arg, depth) {

    const parentRoute = routeFromPathOrRoute(arg, `${moduleName} family()`)

    if (parentRoute === null) return null

    const children = childrenOf(parentRoute, depth)

    return {
        [parentRoute.key]: parentRoute,
        ...children
    }

}
