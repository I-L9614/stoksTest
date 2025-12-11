import { stockMarket } from "../DATA/data.js"

export function searchStock(identifier) {
    const stockFound = stockMarket.stocks.filter(stock => stock.name === identifier||stock.id === identifier)
    return stockFound
}

function filterAbove(price) {
    return stockMarket.stocks.map(stock=> stock.currentPrice>price).sort((a, b) => b.goals - a.goals)
}

function filterBalow(price) {
    stockMarket.stocks.map(stock=> stock.currentPrice<price).sort((a, b) => b.goals - a.goals)
}

export function filterStocksByPrice(givenPrice, above) {

}
