

import { chunkNameFromFilePath } from './chunkNameFromFilePath.js'

import { isValidBundle } from './isValidBundle.js'

export function handleRouteChunk(route) {
    if (route.contentType === 'file') {
        if ( isValidBundle(route.bundle) ) {
            route.chunk = route.bundle
        } else {
            const chunkName = chunkNameFromFilePath(route.content)
            route.chunk = chunkName
        }
    }
}
