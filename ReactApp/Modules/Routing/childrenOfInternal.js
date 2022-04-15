
import { routes } from './routes.js'
import { routeFromPathOrRoute } from './routeFromPathOrRoute.js'
import { moduleName } from './config.js'

export function childrenOfInternal(arg, depth) {

    const parentRoute = routeFromPathOrRoute(arg, `${moduleName} childrenOf()`)

    if (parentRoute === null) return null

    const children = Object.filter(
        routes,
        (key, route) => (
            route.path.startsWith(parentRoute.path + '/')
            && (
                depth === undefined
                || occurances(route.path, '/', parentRoute.path.length) <= depth
            )
        )
    )

    return children
 
}

function occurances(string, char, start = 0) {
    let occurances = 0
    if (start > 0) string = string.slice(start)
    for (const c of string) {
        if (c === char) occurances++
    }
    return occurances
}
