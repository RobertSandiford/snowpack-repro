
export function componentNameFromFilePath(filePath) {

    let componentName = filePath

    //console.log('1', componentName)

    // take the content after the last /
    if (componentName.lastIndexOf('/') !== -1) {
        componentName = componentName.slice( componentName.lastIndexOf('/') + 1 )
    }
   
    //console.log('2', componentName)

    // take the content after the last \
    if (componentName.lastIndexOf('\\') !== -1) {
        componentName = componentName.slice( componentName.lastIndexOf('\\') + 1 )
    }

    //console.log('3', componentName)

    // remove file extension
    if (componentName.lastIndexOf('.') !== -1) {
        componentName = componentName.slice(0, componentName.lastIndexOf('.'))
    }
    
    //console.log('4', componentName)

    return componentName
}
