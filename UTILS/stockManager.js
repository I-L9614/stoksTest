import { before } from "node:test"
import { stockMarket } from "../DATA/data.js"
import { askHowMuchUnits, askForSellOrBy, nameOrId } from "./playerIo.js"

export function searchStock(identifier) {
    const stockFound = stockMarket.stocks.filter(stock => stock.name === identifier || stock.id === identifier)
    return stockFound
}

function filterAbove(price) {
    const above = stockMarket.stocks.filter(stock => stock.currentPrice > price).sort((a, b) => b.goals - a.goals)
    if (above.length === 0) {
        console.log("there is no stocks with higher price!")
    }
    else {
        console.log(above)
    }
}

function filterBalow(price) {
    const Below = stockMarket.stocks.filter(stock => stock.currentPrice < price).sort((a, b) => b.goals - a.goals)
    if (Below.length === 0) {
        console.log("there is no stocks with lower price!")
    }
    else {
        console.log(Below)
    }
}

export function filterStocksByPrice(givenPrice, above) {
    if (above === true && !isNaN(givenPrice)) {
        return filterAbove(givenPrice)
    }
    else if (above === false && !isNaN(givenPrice)) {
        return filterBalow(givenPrice)
    }
    else {
        return above
    }
}

function isBuyOrSell(operation) {
    if (operation !== "buy" || operation !== "sell") {
        return false
    }
    else {
        return true
    }
}

function isIdentifiers(identifier) {
    return stockMarket.stocks.some(stock => stock.id === identifier || stock.name === identifier)
}

function sell(stockNameOrId, units) {
    for (let i = 0; i < stockMarket.stocks.length; i++) {
        if (stockMarket.stocks[i].name === stockNameOrId || stockMarket.stocks[i].id === stockNameOrId) {
            stockMarket.stocks[i].currentPrice = stockMarket.stocks[i].currentPrice + units
        }
    }
}

function By(stockNameOrId, units) {
    for (let i = 0; i < stockMarket.stocks.length; i++) {
        if (stockMarket.stocks[i].name === stockNameOrId || stockMarket.stocks[i].id === stockNameOrId) {
            stockMarket.stocks[i].currentPrice = stockMarket.stocks[i].currentPrice - units
        }
    }
}

function updateUp(category, id) {
    for (let i = 0; i < stockMarket.stocks.length; i++) {
        if (stockMarket.stocks[i].category === category) {
            if (stockMarket.stocks[i].id === id) {
                stockMarket.stocks[i].currentPrice = stockMarket.stocks[i].currentPrice * 1.05
            }
            else {
                stockMarket.stocks[i].currentPrice = stockMarket.stocks[i].currentPrice * 1.01
            }
        }
    }
}

function updateDown(category, id) {
    for (let i = 0; i < stockMarket.stocks.length; i++) {
        if (stockMarket.stocks[i].category === category) {
            if (stockMarket.stocks[i].id === id) {
                stockMarket.stocks[i].currentPrice = stockMarket.stocks[i].currentPrice * 0.95
            }
            else {
                stockMarket.stocks[i].currentPrice = stockMarket.stocks[i].currentPrice * 0.99
            }
        }
    }
}

function insertPreviousPrices() {
    for (let i = 0; i < stockMarket.stocks.length; i++) {
        object.previousPrices.push(object.currentPrice)
    }
}

export function OperateOnStock(operation, identifier) {
    const buyOrSell = askForSellOrBy()
    insertPreviousPrices()
    if (isBuyOrSell(operation) === false || isIdentifiers(identifier) === false) {
        console.log("somthing went wrong! try to change values: ")
        return false
    }
    else {

        if (buyOrSell === "by") {
            const stockNameOrId = nameOrId()
            const stock = stockMarket.stocks.find(stock => stock.id === stockNameOrId || stock.name === stockNameOrId)
            const howMuch = askHowMuchUnits()
            By(stockNameOrId, howMuch)
            console.log(stockMarket.stocks.find(stock1 => stock1.id === stock.id || stock1.name === stock.name))
            updateUp(stock.category, stock.id)
            console.log('this is evrione update')
            console.log(stockMarket.stocks.filter(stock1 => stock1.id === stock.id || stock1.name === stock.name))
        }
        else if (buyOrSell === "sell") {
            const stockNameOrId = nameOrId()
            const stock = stockMarket.stocks.find(stock => stock.id === stockNameOrId || stock.name === stockNameOrId)
            const howMuch = askHowMuchUnits()
            sell(stockNameOrId, howMuch)
            console.log(stockMarket.stocks.find(stock1 => stock1.id === stock.id || stock1.name === stock.name))
            updateDown(stock.category, stock.id)
            console.log(stockMarket.stocks.filter(stock1 => stock1.id === stock.id || stock1.name === stock.name))

        }
        else {
            console.log("no such command:")
            return false
        }


    }
}

