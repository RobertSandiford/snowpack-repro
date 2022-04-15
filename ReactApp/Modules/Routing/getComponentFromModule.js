
import { componentNameFromFilePath } from './componentNameFromFilePath.js'

export function getComponentFromModule(module, route) {
    //console.log('getComponentFromModule')
    //console.log('module', module)
    //console.log('route', route)
    //console.log('route.componentName', route.componentName)
    let Component
    if ( typeof route.componentName === 'string' ) {
        Component = module[route.componentName]
    } else if ('default' in module) {
        Component = module.default
    } else {
        const filePath = route.content
        const componentName = componentNameFromFilePath(filePath)
        //console.log('componentName', componentName)
        if (componentName in module) {
            Component = module[componentName]
        } else {
            throw new Error(`Routing Module, getComponentFromModule() error: Export not found in module ${filePath}`)
        }
    }
    return Component
}
