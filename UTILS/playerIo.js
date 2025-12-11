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

export function askForSellOrBy() {
    return "Did you want to sell or by?(enter sell/by): "
}

export function askHowMuchUnits() {
    return parseInt(input("how meny units you want to by/sell? "))
}

export function nameOrId() {
    return input("Enter stock id or name: ")
}
