import input from '../node_modules/analiza-sync/main.js'

export function askPlayerName() {
    const name = input("Hello and wellcome! What iis your name? ")
    console.log('wellcome ', name)
    return name
}

export function aboveOrBelow() {
    const playerChoice = input("Enter Above or Below: ")
    if (playerChoice !== "Below" || playerChoice !== "Above") {
        return "unrecognizable choice! please try again: "
    }
    else if (playerChoice === "Above") {
        return true
    }
    else if (playerChoice === "Below") {
        return true
    }
}
