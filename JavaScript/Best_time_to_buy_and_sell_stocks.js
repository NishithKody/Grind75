/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let index = 0;
    let res = 0

    for(let i =1; i<prices.length; i++){

        let temp = prices[i]-prices[index]
        res = Math.max(res,temp)

        if(prices[index]>prices[i])
            index = i

    }

    return res
    
};
