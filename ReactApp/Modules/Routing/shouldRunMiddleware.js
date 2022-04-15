
import { moduleName } from './config.js'

export function shouldRunMiddleware(middleware, navType) {
    if ( isDev && ! navType ) throw new Error(`${moduleName} shouldRunMiddleware() error - navType missing`)
    
    let run = true
    
    const fresh = ( navType !== 'nav' ) //(navType === 'fresh-server' || navType === 'fresh-client')

    switch (middleware.location) {
        case 'server':
            if (!isServer) run = false
            break
        case 'client':
            if (!isClient) run = false
            break
        case 'both':
            break
        case 'once':
        default:
            if (isClient && fresh) run = false
    }

    switch (middleware.navigation) {
        case 'fresh':
            if (!fresh) run = false
            break
        case 'nav':
            if (fresh) run = false
            break
    }

    return run
}
