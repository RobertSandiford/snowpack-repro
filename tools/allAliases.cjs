
require('sxy-standard-object-copy')

const mainAliases = Object.copy( require('./processAliases.cjs') )
const nodeAliases = Object.copy( require('./processNodeAliases.cjs') )

const aliases = {}
Object.assign(aliases, mainAliases)
//Object.assign(aliases, nodeAliases)

module.exports = aliases
