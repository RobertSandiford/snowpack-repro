
import 'sxy-standard'
import React from 'react'
import { withRouter } from 'react-router-dom' // eslint-disable-line no-unused-vars


import { moduleName } from './config.js'

import { AppComponent } from '~AppComponent'
/*
import { routes } from './routes.js'

import { find } from './find.js'

import { getComponentFromModule } from './getComponentFromModule.js'

import projectConfig from '~config/project.config.cjs'
import { warn } from './output.js'
const reactRelativeLocation = `./${projectConfig.reactAppLocation}/`
*/
//store.create('navigate', false)

export const RenderRoutes = function() {}
/*
export const RenderRoutes = withRouter(
    class RenderRoutes extends AppComponent {

        init() {
            this.store.create('navigate', false)
        }

        componentDidMount() {
            this.storeSubscribe('navigate') // should be in init, but react complains there
        }

        content() {
           
            // this.location = this.store.get('history').location
            // const location = this.location

            const location = this.props.history.location

            //const l = useLocation() // this is just here to trigger an update,
            // as no updates is coming through from useHistory

            //console.log('Render Routes store', this.store)


            //const history = useHistory()

            //console.log('Render Routes path', location.pathname)

            const routeData = (location.state)
                ? location.state.routeData
                : null

            //console.log('Render Routes routeData', Object.copy(routeData))

            const routeOrNull = find(location.pathname)

            if (routeOrNull !== null) { // a route was found

                const route = routeOrNull

                this.store.set('route', route)

                //// moving this to goto in Modules/Navigation
                
                // // do middleware
                // if ( 'middleware' in route && route.middleware) {
                // //return null
                //     const middlewares = (Array.isArray(route.middleware))
                //         ? route.middleware
                //         : [route.middleware]

                //     for (const middleware of middlewares) {
                //         if (typeof middleware !== 'function') {
                //             throw new Error(`${packageName} RenderRoutes component error,`
                //             + `a middleware for route ${route.key} is not a function.`
                //             + ` Got a ${typeof middleware} instead`)
                //         }
                //         const result = middleware()
                //         if (result === false) return null
                //     }
                // }
            

                if (isClient) {

                    if ( React.isValidElement(route.content) ) {
                        return route.element
                    } else if ( typeof route.content === 'string' ) {

                        const filePath = route.content

                        const originalChunkLocation = reactRelativeLocation + filePath

                        //console.log('originalChunkLocation', originalChunkLocation)
                        const module = __webpack_require__(originalChunkLocation)
                        const Component = getComponentFromModule(module, route)
             
                        return <Component routeData={routeData} />

                    } else {
                        if (isDev)  {
                            throw new Error(`${moduleName} RenderRoutes error: route.content must be a react element`
                            + ` or a string referring to a component file location`)
                        } else {
                            return null
                        }
                    }

                } else { // server

                /////////////////////////////////////////////////////////////
                // do we need to handle route content here?
                // most probably
                // route content needs to be loaded on the server somehow
                /////////////////////////////////////////////////////////////


                    if (
                        React.isValidElement(route.content)
                        || typeof route.content === 'string'
                    ) {
                        route.element.props.routeData = routeData
                        return route.element
                    } else {
                        if (isDev)  {
                            throw new Error(`${moduleName} RenderRoutes error: route.content must be a react element`
                            + ` or a string referring to a component file location`)
                        } else {
                            return null
                        }
                    }

                }

            } else if (routes.default !== undefined) {
                
                // render default
                return 'this should be the default content - to do'

            } else {
                if (isDev) {
                    warn(`Routing Module, RenderRoutes component warning:`
                        + ` No route was found, and no default route exists for path ${location.pathname}`)
                }
                return null
            }
        }
      
    }
)
*/
