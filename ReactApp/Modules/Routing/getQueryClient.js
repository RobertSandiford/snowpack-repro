
// return a Proxy object that can access query string params
// e.g. 
// const query = getQuery()
// const id = query.id
export function getQueryClient() {
    return new Proxy(
        new URLSearchParams(window.location.search),
        {
            get: (searchParams, prop) => searchParams.get(prop),
        }
    )
}
