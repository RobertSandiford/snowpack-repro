/* eslint-disable no-console */

import chalk from 'chalk-extensions'

export function log(...texts) {
    console.log(...texts)
}

export function warn(...texts) {
    texts = texts.map( text => chalk.orange(text) )
    console.log(...texts)
}
