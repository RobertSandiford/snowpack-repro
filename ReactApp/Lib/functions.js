
export function standardizeWebPath(path) {
    if ( typeof path !== 'string' ) throw ('standardizeWebPath error: path must be a string')
    if ( path === '' || path === '/' ) return '/'
    if ( path.slice(0,1) !== '/' ) path = '/' + path
    if ( path.slice(-1) === '/') path = path.slice(0,-1)
    return path
}
export function safeWebPathForStartOfCombinedPath(path) {
    if ( typeof path !== 'string' ) throw ('standardizeWebPath error: path must be a string')
    if ( path.slice(-1) === '/') path = path.slice(0,-1)
    return path
}
