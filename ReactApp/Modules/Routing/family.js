
import { familyInternal } from './familyInternal.js'


export function family(...args) {

    return Object.copy( familyInternal(...args) )

}
