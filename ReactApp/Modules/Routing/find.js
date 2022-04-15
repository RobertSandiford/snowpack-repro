
import { standardizeWebPath } from "../../Lib/functions.js"

import { routes } from './routes.js'
import { test } from './test.js'

export function find(requestPath) {
    /*
    requestPath = standardizeWebPath(requestPath)

    for (const path in routes) {
        const route = {
            path: standardizeWebPath(path),
            ...routes[path],
            //exact: true
        }
        const match = test(route, requestPath)
        if ( match ) {
            //console.log('found match', match)
            return {
                ...route,
                //match,
                matchParams: match.params
            }
        }
    }

    if ( routes.default ) {
        //console.log('returning default route')
        return routes.default
    }
    
    // otherwise
    return null
    */
}
