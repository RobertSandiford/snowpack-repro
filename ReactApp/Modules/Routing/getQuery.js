
// return a Proxy object that can access query string params
// e.g. 
// const query = getQuery()
// const id = query.id
export function getQuery(queryString) {
    return new Proxy(
        new URLSearchParams(queryString),
        {
            get: (searchParams, prop) => searchParams.get(prop),
        }
    )
}
