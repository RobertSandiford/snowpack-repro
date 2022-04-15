
//import { moduleName } from './config.js'
import { runPre } from './runPre.js'

export function runPreIfPresent(route, parcel = {}) {
    if ( 'pre' in route && route.pre ) {
        //console.log('pre', route.pre)
        return runPre(route, parcel)
    }
    return true
}
