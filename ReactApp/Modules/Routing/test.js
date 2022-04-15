
import { matchPath } from "react-router"
//import { packageName } from './config.js'

export function test(route, inPath) {
    // standarise inPath

    // console.log('test', inPath, {
    //     path: route.path,
    //     exact: route.exact
    // })

    const match = matchPath(inPath, {
        path: route.path,
        exact: route.exact
    })

    return match || false
}

