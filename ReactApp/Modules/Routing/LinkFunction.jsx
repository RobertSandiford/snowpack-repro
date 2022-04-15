
/*
import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { matchPath } from 'react-router'
import { useHistory } from 'react-router-dom'

import { find } from './find.js'
import { ensureLeadingSlash } from './ensureLeadingSlash.js'
import { store } from '~Store/index.js'

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

// todo , allow receiving path instead of to

// Link components requires either to (string) or route (route object)
export function Link({to, route, className, children}) {

    if (isDev) {
        if ( to !== undefined && route !== undefined )
            throw (`${packageName} Link error: pass 'to' or 'route', not both`)
        if ( to === undefined && ! route === undefined )
            throw (`${packageName} Link error: pass 'to' or 'route'`)
    }

    const history = useHistory()


    let clicked
    [route, clicked] = useMemo(() => {

        if ( to !== undefined && route !== undefined )
            throw (`${packageName} Link error: pass 'to' or 'route', not both`)
        if ( to === undefined && ! route === undefined )
            throw (`${packageName} Link error: pass 'to' or 'route'`)

        if ( to !== undefined ) {
            route = find(to) // eslint-disable-line -- we return this var from useMemo, saving it
            // we can format 'to' here if we need to
            to = ensureLeadingSlash(to) // eslint-disable-line -- we will consume this var within useMemo
            if ( route === null || route.default ) throw (`${packageName} Link error: route for ${to} not found`)
        } else {
            to = route.path
        }


        const clicked = (event) => {
            event.preventDefault()


            const tasks = {}

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
                
                const params = ( to !== undefined )
                    ? matchPath(to, route).params
                    : {}

                tasks['data'] = route.data(params) // route.data should be an async function
            
            }


            Promise.allMap( tasks ).then( results => {
                // redirect to the new location
                // with the routeData, which will be included in
                // the new location object
                history.push({
                    pathname: to,
                    state: {
                        routeData: results.data
                    },
                    //routeData: results.data
                })
                store.set('navigate', true)
            })
           

        }
        return [route, clicked]
    }, [to, route])

    //console.log('out to', to)
    //console.log('Link route.path', route.path)
    //console.log('Link href', to)

    return applyStyles(styles,
        <a href={to} className={className} onClick={clicked}>{children}</a>
    )
}

const styles = Sass`

    //a
    //    cursor: pointer

`
*/