
require('sxy-standard')

const aliases = require('../config/nodeAliases.cjs')

module.exports = {
    ...Object.remap( aliases, (key, value) => [key, './' + value] )
}
