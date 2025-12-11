import { stockMarket } from "../DATA/data.js"

export function searchStock(identifier) {
    const stockFound = stockMarket.stocks.filter(stock => stock.name === identifier||stock.id === identifier)
    return stockFound
}

function filterAbove(price) {
    console.log(stockMarket.stocks.filter(stock=> stock.currentPrice>price).sort((a, b) => b.goals - a.goals))
}

function filterBalow(price) {
    console.log(stockMarket.stocks.filter(stock=> stock.currentPrice<price).sort((a, b) => b.goals - a.goals))
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



