import { before } from "node:test"
import { stockMarket } from "../DATA/data.js"

export function searchStock(identifier) {
    const stockFound = stockMarket.stocks.filter(stock => stock.name === identifier||stock.id === identifier)
    return stockFound
}

function filterAbove(price) {
    const above = stockMarket.stocks.filter(stock=> stock.currentPrice>price).sort((a, b) => b.goals - a.goals)
    if (above.length===0) {
        console.log("there is no stocks with higher price!")
    }
    else {
        console.log(above)
    }
}

function filterBalow(price) {
    const Below = stockMarket.stocks.filter(stock=> stock.currentPrice<price).sort((a, b) => b.goals - a.goals)
    if (Below.length===0) {
        console.log("there is no stocks with lower price!")
    }
    else {
        console.log(Below)
    }
}

export function filterStocksByPrice(givenPrice, above) {
    if (above===true&&!isNaN(givenPrice)) {
        return filterAbove(givenPrice)
    }
    else if (above===false&&!isNaN(givenPrice)) {
        return filterBalow(givenPrice)
    }
    else {
        return above
    }
}



