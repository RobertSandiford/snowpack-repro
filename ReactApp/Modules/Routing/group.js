
import React from 'react'

import { standardizeWebPath, safeWebPathForStartOfCombinedPath } from "../../Lib/functions.js"
import { route } from './route.js'
import { moduleName } from './config.js'



export function group(options, callback) {

    if (typeof options !== 'object') {
        throw new Error(`${moduleName} group() error:`
            + ` argument 1 "options" must be an object`)
    }

    if (typeof callback !== 'function') {
        throw new Error(`${moduleName} group() error:`
            + ` argument 2 "callback" must be a function`)
    }

    const parentOptions = options

    const childRoute = (path, content, extras = {}) => {

        // arg 1
        if (typeof path !== 'string')
            throw new Error(`${moduleName} group() -> route() error:`
                + ` argument 1 "path" must be a string`)
        
        // arg 2
        if ( typeof content !== 'string' && ! React.isValidElement(content) && content !== null )
            throw new Error(`${moduleName} group() -> route() error`
                + ` argument 2 \`content\` must be a react element, e.g. <Home />,`
                + ` or a string referring to a file from the base of the react app, e.g. 'Pages/Home.js'`)
        
        // arg 3
        if ( typeof extras !== 'object' )
            throw new Error(`${moduleName} group() -> route() error`
                + ` argument 3 \`extras\` must be an object to undefined`)
        

        if ('basePath' in parentOptions) {
            path = standardizeWebPath(
                safeWebPathForStartOfCombinedPath(parentOptions.basePath) + standardizeWebPath(path)
            )
        }
        for (const k in parentOptions) {
            if ( ! (k in extras) ) extras[k] = parentOptions[k]
        }
        return route(path, content, extras)
    }

    // copy this group's options on the child options, then call group again
    const childGroup = (options, callback) => {

        // arg 1
        if (typeof options !== 'object')
            throw new Error(`${moduleName} group() -> group() error:`
                + ` argument 1 "options" must be an object`)
            
        // arg 2
        if ( typeof callback !== 'function' )
            throw new Error(`${moduleName} group() -> group() error`
                + ` argument 2 \`callback\` must be a function`)
           
        //console.log('parentOptions', parentOptions)
        //console.log('options', options)
        if ('basePath' in parentOptions && 'basePath' in options) {
            options.basePath = parentOptions.basePath + standardizeWebPath(options.basePath)
        }
        for (const k in parentOptions) {
            if ( ! (k in options) ) options[k] = parentOptions[k]
        }
        // console.log('child group basePath is: ', options.basePath)
        return group(options, callback)
    }

    const optionsCopy = Object.copy(options)

    callback({
        route: childRoute,
        subRoute: childRoute,
        childRoute,
        group: childGroup,
        subGroup: childGroup,
        childGroup,
        // pass the settings/options down to be referenced in
        // child elements
        options: optionsCopy,
        settings: optionsCopy,
        parentOptions: optionsCopy,
        parentSettings: optionsCopy,
    })
}





