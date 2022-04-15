
export function chunkNameFromFilePath(filePath) {
    // filename may include a path, e.g. Pages/Home.js

    // replace forward and back slashes with underscores
    let chunkName = filePath.replaceAll('/', '_').replaceAll('\\', '_')

    // remove file extension
    if (chunkName.indexOf('.') !== -1) {
        chunkName = chunkName.slice(0, chunkName.lastIndexOf('.'))
    }
    
    return chunkName
}
