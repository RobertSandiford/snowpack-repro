
require('sxy-standard')

const aliases = require('../config/aliases.cjs')

const processedAliases = {
    '/': '.',
    ...Object.remap( aliases, (key, value) => ['~' + key, './' + value] )
}

//console.log('processedAliases', processedAliases)

module.exports = processedAliases
