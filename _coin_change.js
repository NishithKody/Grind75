/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    let dp = new Array(amount+1).fill(Infinity)
    dp[0] = 0

    for(let i=1; i<=amount;i++){
        for(let c of coins){

            if(c<=i){
                dp[i] = Math.min(dp[i],dp[i-c]+1)
            }

        }
    }

    if(dp[amount]==Infinity)
        return -1
    else 
        return dp[amount]
    
};
