
function makeUrl(proto, host, port) {
    if (port === 80) return `${proto}://${host}`
    else return `${proto}://${host}:${port}`
}

export const baseUrl = makeUrl(
    import.meta.env.PROTO,
    import.meta.env.HOST,
    import.meta.env.PORT
)

let apiInternalUrl
if (isServer) {
    apiInternalUrl = makeUrl(
        import.meta.env.API_INTERNAL_PROTO,
        import.meta.env.API_INTERNAL_HOST,
        import.meta.env.API_INTERNAL_PORT
    )
}
export { apiInternalUrl }

export const apiExternalUrl = makeUrl(
    import.meta.env.API_EXTERNAL_PROTO,
    import.meta.env.API_EXTERNAL_HOST,
    import.meta.env.API_EXTERNAL_PORT
)
