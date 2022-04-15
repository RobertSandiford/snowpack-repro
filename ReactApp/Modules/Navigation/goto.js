
import { matchPath } from 'react-router'
import { find } from '~Routing/find.js'
import { moduleName } from './settings.js'
import { runMiddlewareIfPresent } from '~Routing/runMiddlewareIfPresent.js'
import { runPreIfPresent } from '~Routing/runPreIfPresent.js'
import * as network from '~Network/index.js'


const fullComponentName = `${moduleName} goto() function`

export async function goto(parcel, to, route = null/*, data = null*/) { // eslint-disable-line require-await
    
    if (typeof parcel !== 'object') {
        throw new Error(
            `${moduleName} goto() Error,`
            + ` parcel is not an object, received ${typeof parcel}`
        )
    }
    
    const history = parcel.store.get('history')

    const tasks = {}

    if (route === null) route = find(to)

                
    if (route === null) {
        throw new Error(
            `${fullComponentName} error,`
            + ` no route found for path "${to}"`
        )
    }

    const routeParams = matchPath(to, route).params

    
    const routeState = {}
    const stateSet = (key, value) => routeState[key] = value
    const stateGet = (key) => routeState[key]
    
    let newParcel
    if (isServer) {
        const reqRes = {
            req: parcel.request,
            request: parcel.request,
            res: parcel.response,
            response: parcel.response,
        }
        newParcel = {
            ...reqRes,
            navType: 'nav',
            get: (...args) => network.get(reqRes, ...args), // bind this first
            post: (...args) => network.post(reqRes, ...args), // bind this first
            store: parcel.store,
            params: routeParams,
            routeParams,
            state: routeState,
            stateSet,
            stateGet,
        }
    } else {
        newParcel = {
            navType: 'nav',
            get: (...args) => network.get({}, ...args), // bind this first
            post: (...args) => network.post({}, ...args), // bind this first
            store: parcel.store,
            params: routeParams,
            routeParams,
            state: routeState,
            stateSet,
            stateGet,
        }
    }



    const middlewareResult = await runMiddlewareIfPresent(route, newParcel)
    if (middlewareResult === false) { // some middleware has asked us to halt
        return
    }
    
    const preResult = await runPreIfPresent(route, newParcel)
    if (preResult === false) { // some pre has asked us to halt
        return
    }
    

    if (isServer) {
        //const req = global.__rev_server_request__
        //const res = global.__rev_server_response__
        parcel.response.redirect(to)
    }

    if (isClient) {


        //console.log('Link route', route)
        if ('chunk' in route) {

            //console.log('Link chunk group', window.__rev_stats__.namedChunkGroups[route.chunk])
            const chunkGroup = window.__rev_stats__.namedChunkGroups[route.chunk]
            const neededChunks = chunkGroup.assets.map( x => x.name )

            const scripts = document.querySelectorAll('script')
            for (const script of scripts) {
                const src = script.src
                const file = src.slice( src.lastIndexOf('/') + 1 )
                        

                neededChunks.remove(file)
                if (neededChunks.length === 0) continue // can skip ahead
            }

            if (neededChunks.length >= 1) {
                for (const chunk of neededChunks) {
                    const chunkScript = document.createElement('script', )
                    //console.log('Link src', '/' + chunk)
                    //chunkScript.setAttribute('src', window.location.origin + '/' + route.chunk + '.js')
                    chunkScript.setAttribute('src', '/' + chunk)
                    document.head.append( chunkScript )
            
                    tasks['chunk_' + chunk] = new Promise( resolve => {
                        chunkScript.addEventListener('load', resolve)
                    } )
                }
            }
            
        }

        // if the route has a data loading function
        // call it and add the promise to the tasks
        if ( 'data' in route ) {
                    
            //const params = ( to !== undefined )
            //    ? matchPath(to, route).params
            //    : {}

            tasks['data'] = route.data(newParcel) // route.data should be an async function
                
        }

        Promise.allMap( tasks ).then( results => {
            // redirect to the new location
            // with the routeData, which will be included in
            // the new location object
            history.push({
                pathname: to,
                state: {
                    routeData: results.data,
                    routeState: newParcel.state
                },
            
            })
            parcel.store.set('navigate', true)

            //resolve()
        })

    }
        
    
}

export function back() {

}

export function forward() {

}
