/** @type {import("snowpack").SnowpackUserConfig } */

import aliases from './config/aliases.cjs'
const processedAliases = {}
for (const key in aliases) {
    processedAliases['~' + key] = './' + aliases[key]
}

const nodeAliases = {
    '#root': '.'
}

//console.log('processedAliases', processedAliases)
//console.log('node Aliases', nodeAliases)

export default {
    mount: {
        public: '/',
        ReactApp: '/dist',
        config: '/config'
    },
    alias: {
        ...processedAliases,
        ...nodeAliases
    },
    plugins: [
        /* ... */
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        polyfillNode: true
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
}
