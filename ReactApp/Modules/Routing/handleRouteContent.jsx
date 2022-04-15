

import { componentNameFromFilePath } from './componentNameFromFilePath.js'
//import { chunkNameFromFilePath } from './chunkNameFromFilePath.js'

import projectConfig from '~config/project.config.cjs'
const serverBuildLocation = `${projectConfig.serverBuildFolder}`

function join(...parts) { return parts.join('/') }




export function handleRouteContent(route) {

    //console.log(route)

    if (route.contentType === 'element') {
        // save the content element as the route content
        route.element = route.content
    } else { // content refers to a source file

        //const chunkName = chunkNameFromFilePath(route.content)
        //route.chunk = chunkName

        if (isClient) {
            // do nothing
        } else {
            // begin loading the content asyncronously
            // and save the promise, to allow waiting for completion when needed
            // this function is called from a sync function
            // so we can't wait now without messing up dx by requiring awaits
            return new Promise( async (resolve, reject) => { // eslint-disable-line no-async-promise-executor
                const filename = route.content
                let Component
                let module
                if (isSxyLoaded) {
                    module = await __sxy_import__( join(process.cwd(), serverBuildLocation, filename) )
                    //console.log('route sxy loaded module', module)
                    //component = (typeof namedImport === 'string') ? module.named[namedImport] : module.default
                } else {
                    module = await import(
                        /* webpackIgnore: true */
                        'file://' + join(process.cwd(), serverBuildLocation, filename)
                    )
                    //console.log('route import loaded module', module)
                    //component = (typeof namedImport === 'string') ? module[namedImport] : module.default
                }

                // console.log('module', module)
                // console.log('route', route)
                // console.log('componentName', route.componentName)
                if ( typeof route.componentName === 'string' ) {
                    Component = module[route.componentName]
                } else if ('default' in module) {
                    Component = module.default
                } else {
                    const componentName = componentNameFromFilePath(filename)
                    //console.log('componentName', componentName)
                    if (componentName in module) {
                        Component = module[componentName]
                    } else {
                        //throw new Error(`Routing Module, handleRouteContent() error:`
                        //    + ` Export not found in module ${filename}`)
                        reject(
                            new Error(`Routing Module, handleRouteContent() error:`
                                + ` A file referenced as page content by a route has no default export,`
                                + ` and no export named the same as the file.`
                                + ` Perhaps you made a mistake somewhere.`
                                + `\nIf your component name`
                                + ` is different to the file name, specify it with componentName: <name>`
                                + ` in the route properties.`
                                + `\nTarget filename: ${filename}`
                                + `\nRoute: ${route.key}`)
                        )
                    }
                }
                //console.log('component', Component)

                // turn the loaded componenet into an element and save it as the route element
                route.element = <Component />

                resolve(route.element)
            } )
        }
       

    }

    return null

}
