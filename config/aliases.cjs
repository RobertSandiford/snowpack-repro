
const reactLocation = 'ReactApp'
const reactModules = reactLocation + '/Modules'

module.exports = {
    //'Common': '../common',

    ReactApp: `${reactLocation}`,

    ReactAppComponent: `${reactLocation}/AppComponent/AppComponent.js`,
    AppComponent: `${reactLocation}/AppComponent/AppComponent.js`,

    ReactPages: `${reactLocation}/Pages`,
    Pages: `${reactLocation}/Pages`,

    ReactLayouts: `${reactLocation}/Layouts`,
    Layouts: `${reactLocation}/Layouts`,

    ReactComponents: `${reactLocation}/Components`,
    Components: `${reactLocation}/Components`,

    ReactRoutes: `${reactLocation}/Routes/routes.jsx`,
    Routes: `${reactLocation}/Routes/routes.jsx`,

    ReactLib: `${reactLocation}/Lib`,
    Lib: `${reactLocation}/Lib`,

    ReactModules: reactModules,
    Modules: reactModules,

    ReactConfig: `${reactLocation}/config.js`,
    //Config: `${reactLocation}/config.js`,

    ReactRequests: `${reactLocation}/Requests`,
    Requests: `${reactLocation}/Requests`,
    

    //SxyComponent: `${reactModules}/SxyComponent`,
    Sxy: `${reactModules}/Sxy`,
    Auth: `${reactModules}/Auth`,
    Flow: `${reactModules}/Flow`,
    Routing: `${reactModules}/Routing`,
    Navigation: `${reactModules}/Navigation`,
    Splitting: `${reactModules}/Splitting`,
    Store: `${reactModules}/Store`,
    BrowserStore: `${reactModules}/BrowserStore`,
    Stylesheets: `${reactModules}/Stylesheets`,
    Network: `${reactModules}/Network`,

    config: `config`, // having an unknown problem with this when loaded through sxy-loader, probably different number of base dirs
    tools: `tools`, // these are like to be the same if used in ReactApp
    babelPlugins: `tools/babelPlugins`, // these are like to be the same if used in ReactApp
    postcssPlugins: `tools/postcssPlugins`, // these are like to be the same if used in ReactApp
}
