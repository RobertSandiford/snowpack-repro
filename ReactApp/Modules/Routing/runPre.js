
import { moduleName } from './config.js'

export async function runPre(route, parcel = {}) {

    //console.log('running middleware')

    //console.log('runMiddlewareIfPresent - there is middleware')
    //return null
    
    const pres = (Array.isArray(route.pres))
        ? route.pre
        : [route.pre]

    for (const pre of pres) {
        if (isDev && typeof pre !== 'function') {
            throw new Error(
                `${moduleName} runPre() error,`
                    + `a pre for route ${route.key} is not a function.`
                    + ` Got a ${typeof pre} instead`
            )
        }
        const result = await pre(parcel)
        if (result === false) { // a pre wants us to stop
            return false
        }
    }

    return true

}
