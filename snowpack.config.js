/** @type {import("snowpack").SnowpackUserConfig } */

export default {
    knownEntrypoints: ['history'],
    mount: {
        public: '/',
        ReactApp: '/dist',
        config: '/config'
    },
    plugins: [
    ],
    routes: [
    ],
    optimize: {
    },
    packageOptions: {
        //polyfillNode: true
    },
    devOptions: {
    },
    buildOptions: {
    },
}
