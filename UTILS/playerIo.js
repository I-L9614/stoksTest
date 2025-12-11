import input from '../node_modules/analiza-sync/main.js'

export function askPlayerName() {
    const name = input("Hello and wellcome! What iis your name? ")
    console.log('wellcome ',name)
    return name
}

