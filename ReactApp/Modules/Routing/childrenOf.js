
import { childrenOfInternal } from './childrenOfInternal.js'

export function childrenOf(...args) {

    return Object.copy( childrenOfInternal(...args) )

}
