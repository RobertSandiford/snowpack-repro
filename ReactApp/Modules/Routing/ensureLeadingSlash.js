
// function for adding slash?
export function ensureLeadingSlash(path) {
    if (path.length >= 1 && path.slice(0,1) !== '/') {
        path = '/' + path
    }
    return path
}
