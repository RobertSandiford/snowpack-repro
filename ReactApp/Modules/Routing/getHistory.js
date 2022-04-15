

// import { store } from '~Store/index.js'
// import { moduleName } from './config.js'

// export function getHistory() {
//     const history = store.get('history')
//     if (isDev && history === undefined) {
//         log(
//             `${moduleName} Warning: history is undefined.`
//             +` Did you try to get the history outside of or without the <Routing> component?`
//         )
//     }
//     return history
// }

import { getStore } from '~Store/getStore.js'

export function getHistory() {
    const store = getStore()
    return store.get('history')
}
