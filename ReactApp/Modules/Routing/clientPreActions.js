
import { find } from '~Routing/find.js'
import { runPre } from './runPre.js'
import { runMiddleware } from './runMiddleware.js'



export async function clientPreActions(parcel) {
    const route = find(window.location.pathname)
    if (route === null) return

    if ( route.middleware ) {
        const middlewareResult = runMiddleware(route, parcel)
        if ( middlewareResult === false ) return false
    }

    if ( route.pre ) {
        const preResult = await runPre(route, parcel)
        if ( preResult === false ) return false
    }

    return true
}
