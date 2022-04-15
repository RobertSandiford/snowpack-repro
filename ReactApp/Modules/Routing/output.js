/* eslint-disable no-console */

import chalk from 'chalk-extensions'

export function warn(...texts) {
    texts = texts.map( text => chalk.orange(text) )
    console.log(...texts)
}

export function error(...texts) {
    texts = texts.map( text => chalk.red(text) )
    console.log(...texts)
}
