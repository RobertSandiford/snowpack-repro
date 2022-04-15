


// helper funcs to set a field on the function to control
// how middleware is executed

// usage of this field is not yet implement
// just drafting

// runs only once
export function onceware(middleware) {
    middleware.location = 'once'
    return middleware
}

// client only
export function clientware(middleware) {
    middleware.location = 'client'
    return middleware
}

// server only
export function serverware(middleware) {
    middleware.location = 'server'
    return middleware
}

// client + server
export function bothware(middleware) {
    middleware.location = 'both'
    return middleware
}

// runs only any nav
export function anynavware(middleware) {
    middleware.navigation = 'both'
    return middleware
}

// runs only on a fresh site load
export function freshware(middleware) {
    middleware.navigation = 'fresh'
    return middleware
}

// runs only on a later navigation
export function navware(middleware) {
    middleware.navigation = 'nav'
    return middleware
}

// always runs
export function alwaysware(middleware) {
    middleware.location = 'both'
    middleware.navigation = 'both'
    return middleware
}



// if (shouldRunMiddleware(middleware, 'fresh')) {
//     // run middleware
//}
