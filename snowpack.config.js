/** @type {import("snowpack").SnowpackUserConfig } */

export default {
    knownEntrypoints: ['history'],
    mount: {
        public: '/',
        ReactApp: '/dist',
    },
    packageOptions: {
        //polyfillNode: true
    },
}
