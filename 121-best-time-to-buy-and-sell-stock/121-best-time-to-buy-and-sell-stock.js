/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;
    prices.forEach(stock => {
        if(stock < min) min = stock;
        else if(stock - min > profit) profit = stock - min;
    })
    return profit;
};
