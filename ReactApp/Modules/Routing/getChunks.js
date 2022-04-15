
import 'sxy-standard'

import { warn } from './output.js'
import { routes as mainRoutes } from './routes.js'
import { moduleName } from './config.js'
import { chunkNameFromFilePath } from './chunkNameFromFilePath.js'
import { isValidBundle } from './isValidBundle.js'

export function getChunks(routes = undefined) {
    if (routes === undefined) routes = mainRoutes

    const userChunks = []
    const generatedChunks = []

    const chunks = {}
    for (const path in routes) {
        const route = routes[path]
        if ( typeof route.content === 'string' ) {

            const filePath = route.content
            
            
            if ('bundle' in route && typeof route.bundle === 'string' && route.bundle !== '') {
                    // custom chunk/bundle specified in route definition
                //if ( ! (route.bundle in chunks) ) {
                
                if ( generatedChunks.includes(route.bundle) ) {
                    throw new Error(
                        `${moduleName} getChunks() error:`
                        + ` bundle ${route.bundle} for route ${route.path} conflicts with`
                        + ` a chunk generated for another file.`
                        + ` Vary the names of bundles or files until they do not conflict.`
                    )
                }
                if ( ! userChunks.includes(route.bundle) ) {
                    chunks[route.bundle] = []
                    userChunks.push(route.bundle)
                }
                chunks[route.bundle].push(filePath)
            } else { // no custom chunk - create a chunk
                const chunkName = chunkNameFromFilePath(filePath)
                if ( userChunks.includes(chunkName) ) {
                    throw new Error(
                        `${moduleName} getChunks() error:`
                        + ` chunk/bundle ${chunkName} for ${filePath} conflicts with`
                        + ` user specified bundle of the same name.`
                        + ` Vary the names of bundles or files until they do not conflict.`
                    )
                }
                if ( generatedChunks.includes(chunkName) ) {
                    throw new Error(
                        `${moduleName} getChunks() error:`
                        + ` chunk/bundle ${chunkName} for ${filePath} conflicts with`
                        + ` a chunk generated for another file, probably with a very similar path and name.`
                        + ` Vary the names of files until they do not conflict,`
                        + ` or specify a custom bundle name in the route definition.`
                    )
                }
                // if ( chunkName in chunks ) {
                //     warn(`${packageName} getChunks() warning: ${chunkName } already exists in the list of chunks.`
                //         + `It will be overwritten`)
                // }
                chunks[chunkName] = [filePath]
                generatedChunks.push(chunkName)
            }

           
        } else if ( isValidBundle(route.bundle) ) {
            // the route is not using a file path for content
            // but has a bundle defined
            // we don't add it to the bundle because the content
            // is already imported
            // but warn the user
            warn( `${moduleName} getChunks() warning:`
                + ` route ${route.path} specifies a bundle (${route.bundle}),`
                + ` but the route uses a direct react element content which is`
                + ` already part of the main bundle.`
                + ` bundle specification will be ignored.`
                + ` Use a file path as content instead of a react element`
                + ` if you want to split the code into a separate bundle.`
            )
        

        }
    }
    return chunks
}


