
const globalObj = (typeof global !== 'undefined')
    ? global
    : (typeof globalThis !== 'undefined')
        ? globalThis
        : (typeof window !== 'undefined')
            ? window
            : (() => { throw (`Globals setup error: can't find a global object`) })()

if ( import.meta.env.MODE !== 'development' && process.env.MODE !== 'production' ) {
    throw (`Error, import.meta.env.MODE not set to a valid value. `
        + `Current value: ${import.meta.env.MODE}. Should be development or production`)
}

globalObj.mode = import.meta.env.MODE

globalObj.isServer = ( typeof process !== 'undefined' )
globalObj.isClient = ! globalObj.isServer

if ( typeof isDebug === 'undefined') globalObj.isDebug = false
